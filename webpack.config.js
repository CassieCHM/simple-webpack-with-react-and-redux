const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const config = require('./config/base')
const AppName = process.env.APP_NAME || 'ydcy'
const env = process.env.NODE_ENV || 'pro'
const SrcPath = path.join(__dirname, './src')
const DistPath = path.join(__dirname, `./dist-${AppName}`)
const host = config.app[AppName].hosts[env === 'pro' ? 'pro' : 'dev']

const webpackConfig = {
    entry: {
        index: [path.join(SrcPath, `./index.js`)]
    },
    output: {
        path: path.resolve(__dirname, `dist-${AppName}`),
        filename: '[name].[hash:5].js',
    },
    resolve: {
        alias: {
            SRC: SrcPath
            // APP_THEME: path.join(SrcPath, `/app/${AppName}`)
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
                    use: ['css-loader?localIdentName=[local]', 'sass-loader']
                })
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(DistPath),
        new HtmlWebpackPlugin({
            template: path.join(SrcPath, './index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}
module.exports = webpackConfig