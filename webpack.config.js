const webpack = require('webpack')
const path = require('path')
const srcPath = path.join(__dirname, './src')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const webpackConfig = {
    entry: {
        index: [path.join(srcPath, `./index.js`)]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:5].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, './index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
}
module.exports = webpackConfig