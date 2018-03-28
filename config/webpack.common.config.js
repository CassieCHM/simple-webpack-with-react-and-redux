const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const config = require('./base')
const AppName = process.env.APP_NAME || 'ydcy'
const env = process.env.NODE_ENV || 'dev'
const SrcPath = path.join(__dirname, '../src')
const DistPath = path.join(__dirname, `../dist-${AppName}`)
const AppConfig = config.app[AppName]
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
        filename: `[name].[${env === 'dev' ? 'hash' : 'chunkhash'}:5].js`
    },
    resolve: {
        alias: {
            SRC: SrcPath,
            APP_THEME: path.join(SrcPath, `/app/${AppName}`)
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
                test: /\.(png|jpg|gif|ico)$/,
                use: {
                    loader: 'url-loader',
                    // options: {
                    //     limit: 8192
                    // }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(DistPath),
        new HtmlWebpackPlugin({
            template: path.join(SrcPath, './index.html'),
            filename: 'index.html',
            inject: 'body',
            KEYWORD: AppConfig.keyword,
            APP_NAME: AppName,
            FAVICON_PATH: `${DistPath}/app/${AppName}/images/favicon.icon`
        }),
        new ExtractTextPlugin(env === 'dev' ? 'styles.[hash:5].css' :  'styles.[chunkhash:5].css')
    ]
}
module.exports = webpackConfig