module.exports = {
    app: {
        ydcy: {
            keyword: '??',
            shortCut: 'hsh',
            name: 'dfslkf',
            email: 'fsdld',
            zipCode: 'fgfdg',
            province: 'fg',
            zipCodeDefault: 'ghd',
            hosts: {
                pro: {
                    admin: 'fsdf',
                    downloadApp: 'sfdgf',
                    adminPdf: 'fgd',
                    clientPdf: 'dfgdg',
                    acl: '发郭德纲'
                },
                dev: {
                    admin: '发电公司的',
                    downloadApp: 'fgdf',
                    adminPdf: 'fdg',
                    clientPdf: 'ghfg',
                    acl: 'gf'
                }
            }
        }

    },
    devServerHost: 8089,
    proxy: {
        'fg': {
            target: 'dfg',
            secure: false,
            changeOrigin: true
        },
        'ghf': {
            target: 'gfh',
            secure: false,
            changeOrigin: true
        },
        'gfg': {
            target: 'gfdf',
            secure: false,
            changeOrigin: true
        },
        'gdf': {
            target: 'dg',
            secure: false,
            changeOrigin: true
        },
        'fg': {
            target: 'gfdg',
            secure: false,
            changeOrigin: true,
            timeout: 600
        }
    }
};
