const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const fsExtra = require('fs-extra')

// 缓存的package.json路径
const packageCacheFilePath = path.join(__dirname, './_package.json')
// 判断是否存在缓存的package.json
const isExistPackageCacheFile = fs.existsSync(packageCacheFilePath)

// 如果不存在，创建一个
if ( !isExistPackageCacheFile ) {
  fsExtra.writeJsonSync(packageCacheFilePath, {dependencies: {}, devDependencies: {}})
  fsExtra.emptyDirSync('./node_modules')
}

const REG = /^\^|~/g
// 缓存的数据
const cachedPackageConfig = fsExtra.readJsonSync(packageCacheFilePath)
// 真实用到的package.json的数据
const packageConfig = fsExtra.readJsonSync('./package.json')

let cachedPackages
let packages
let packageObj
const packageToInstall = []
const xmPackageToInstall = [];

['dependencies', 'devDependencies'].forEach(d => {
  cachedPackages = cachedPackageConfig[d]
  packages = packageConfig[d]

  for ( let p in packages ) {
    // 如果缓存中的数据不存在
    // 或者版本与真实的不一致
    if ( !cachedPackages[p] || packages[p] !== cachedPackages[p] ) {
      packageObj = {
        name: p,
        version: packages[p].replace(REG, ''),
        dev: d === 'devDependencies'
      }

      // // 如果是私有包，无法自动安装，需要手动安装
      // if (p.indexOf('@xm/') > -1) {
      //   xmPackageToInstall.push(packageObj)
      // } else {
        packageToInstall.push(packageObj)
      // }
    }
  }
})

// 如果有需要安装的包
if ( packageToInstall.length ) {
  fsExtra.writeJsonSync(packageCacheFilePath, packageConfig)

  const packages = packageToInstall.filter(p => !p.dev).map(p => `${p.name}@${p.version}`).join(' ')
  const devPackages = packageToInstall.filter(p => p.dev).map(p => `${p.name}@${p.version}`).join(' ')

  child_process.execSync(`cnpm i ${packages} -S --registry=http://10.0.10.59:7001`)
  child_process.execSync(`cnpm i ${devPackages} -D --registry=http://10.0.10.59:7001`)
}

return false
