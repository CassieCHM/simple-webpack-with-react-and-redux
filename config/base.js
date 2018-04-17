module.exports = {
    app: {
        test: {
            keyword: '关键字',
            shortCut: '短称',
            name: '全称',
            email: '邮件',
            zipCode: '邮编',
            province: '省份',
            zipCodeDefault: '默认邮编',
            favicon: '',
            hosts: {
                pro: {
                    admin: 'https://www.baidu.com',
                    downloadApp: 'https://www.baidu.com',
                    adminPdf: 'https://www.baidu.com',
                    clientPdf: 'https://www.baidu.com',
                    acl: 'https://www.baidu.com'
                },
                dev: {
                    admin: 'http://www.baidu.com',
                    downloadApp: 'http://www.baidu.com',
                    adminPdf: 'http://www.baidu.com',
                    clientPdf: 'http://www.baidu.com',
                    acl: 'http://www.baidu.com'
                }
            }
        }
    },
    devServerHost: 8089,
    proxy: {
        '/jiekouming': {
            target: 'jiekousuozaifuwuqidizhi',
            secure: false,
            changeOrigin: true
        }
    }
};
