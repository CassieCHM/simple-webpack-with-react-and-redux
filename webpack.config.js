const webpack = require('webpack')
const path = require('path')

const webpackConfig = {
    entry: {
        index: [path.join(__dirname, './app/main.js')]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
}

module.exports = webpackConfig



