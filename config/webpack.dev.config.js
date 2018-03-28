const Merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const config = require('./base')
const baseConfig = require('./webpack.common.config')
const RUN_IN_IE = process.env.RUN_IN_IE || false
const SrcPath = path.join(__dirname, '../src')

const webpackConfig = {
    entry: {
        index: []
    },

    devtool: 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: 'admin1.jituancaiyun.net',
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: {
            colors: true
        },
        contentBase: path.join(__dirname, './tmp'),
        proxy: config.proxy,
        port: config.devServerHost
    }
}

if ( RUN_IN_IE ) {
    delete webpackConfig.devServer.hot
    delete webpackConfig.devServer.inline
}

module.exports = Merge(baseConfig, webpackConfig)
