const Merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./base')
const baseConfig = require('./webpack.common.config')
const RUN_IN_IE = process.env.RUN_IN_IE || false
const env =  process.env.NODE_ENV || 'dev'

const webpackConfig = {
    plugins: env === 'pro'
        ? [
            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    screw_ie8: !RUN_IN_IE
                },
                mangleProperties: {
                    screw_ie8: !RUN_IN_IE,
                },
                output: {
                    screw_ie8: !RUN_IN_IE
                },
                compress: {
                    unused: true,
                    dead_code: true,
                    screw_ie8: !RUN_IN_IE,
                    warnings: false,
                    drop_console: false,
                },
                exclude: [/^module-bundle.*/],
                sourceMap: false
            })
        ]
        : []
}

module.exports = Merge(baseConfig, webpackConfig)
