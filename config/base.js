module.exports = {
    app: {
        ydcy: {
            keyword: '移动彩云企业管理后台-管理员轻松设置',
            shortCut: '彩云',
            name: '移动彩云',
            email: '邮件',
            zipCode: '330000',
            province: '浙江省',
            zipCodeDefault: '330101',
            hosts: {
                pro: {
                    admin: 'admin.jituancaiyun.com',
                    downloadApp: 'http://www.jituancaiyun.com/d/',
                    adminPdf: 'http://video.statics.cdn.jituancaiyun.com/information/doc/Caiyun_Portal_Admin.pdf',
                    clientPdf: 'http://video.statics.cdn.jituancaiyun.com/information/doc/Caiyun_APP_Client.pptx',
                    acl: 'https://acl.jituancaiyun.com/power/user/view/login.html?referPageUrl=https://admin.jituancaiyun.com'
                },
                dev: {
                    admin: 'admin.jituancaiyun.net',
                    downloadApp: 'http://www.jituancaiyun.com/d/',
                    adminPdf: 'http://video.statics.cdn.jituancaiyun.com/information/doc/Caiyun_Portal_Admin.pdf',
                    clientPdf: 'http://video.statics.cdn.jituancaiyun.com/information/doc/Caiyun_APP_Client.pptx',
                    acl: 'http://acl.jituancaiyun.net/power/user/view/login.html?referPageUrl=http://admin.jituancaiyun.net'
                }
            }
        },
        xdmt: {

        },
        zjny: {

        },
        zjfl: {

        },
        zjrd: {

        },
        yqx: {

        }
    },
    devServerHost: 8000,
    proxy: {
        '/entadmin': {
            target: 'http://10.0.10.64:8082',
            secure: false,
            changeOrigin: true
        },
        '/webaace': {
            target: 'http://10.0.10.48:8084',
            secure: false,
            changeOrigin: true
        },
        '/webadmin': {
            target: 'http://10.0.10.48:8086/webaace/',
            secure: false,
            changeOrigin: true
        },
        '/appadmin': {
            target: 'http://10.0.10.64:8081',
            secure: false,
            changeOrigin: true
        },
        '/sfs': {
            target: 'http://10.0.10.99:8087',
            secure: false,
            changeOrigin: true,
            timeout: 600
        },
        '/dot-log': {
            target: 'http://10.0.10.105:8777',
            secure: false,
            changeOrigin: true
        }
    }
};
