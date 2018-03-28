/**
 * 确保已经安装了fs-extra包
 */
const child_process = require('child_process')

try {
  const fsExtra = require('fs-extra')
} catch(e) {
  child_process.execSync(`cnpm i fs-extra --save-dev`)
}
