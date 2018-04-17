const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const config = require('./config/base')
const App = process.env.APP_NAME || 'test'
const env = process.env.NODE_ENV || 'dev'
const SrcPath = path.join(__dirname, './src')
const DistPath = path.join(__dirname, `./dist-${App}`)
const AppConfig = config.app[App]
const host = AppConfig.hosts[env === 'pro' ? 'pro' : 'dev']

let vendors = []

vendors = vendors.concat([
    'babel-polyfill',
    'react',
    'react-dom',
    'react-router-dom',
    path.join(SrcPath, '/vendor/jquery.vendor.js'),
    path.join(SrcPath, '/vendor/cookie.vendor.js'),
])

const webpackConfig = {
    entry: {
        vendor: vendors,
        index: [path.join(SrcPath, `./index.js`)]
    },
    output: {
        path: DistPath,
        filename: `[name].[${env === 'dev' ? 'hash' : 'chunkhash'}:5].js`,
        chunkFilename: '[name].[chunkhash:5].js'
    },
    resolve: {
        alias: {
            SRC: SrcPath,
            APP_THEME: path.join(SrcPath, `/app/${App}`)
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'sass-loader']
                })
            }, {
                test: /\.(png|jpg|gif|ico|svg|woff)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            }, {
                test: /\.(eot|ttf)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(DistPath),
        new webpack.DefinePlugin({
            APP: JSON.stringify(App),
            APP_NAME: JSON.stringify(AppConfig.name),
            ADMIN_URL: JSON.stringify(host.admin),
            LOGIN_URL: JSON.stringify(host.acl)
        }),
        new HtmlWebpackPlugin({
            template: path.join(SrcPath, './index.html'),
            filename: 'index.html',
            inject: 'body',
            KEYWORD: AppConfig.keyword,
            APP: App,
            APP_NAME: AppConfig.name,
            LOGIN_URL: host.acl,
            ADMIN_URL: host.admin,
            FAVICON_PATH: AppConfig.favicon
        }),
        new ExtractTextPlugin(env === 'dev' ? 'styles.[hash:5].css' :  'styles.[chunkhash:5].css')
    ]
}

module.exports = webpackConfig