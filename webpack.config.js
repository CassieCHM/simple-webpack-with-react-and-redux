var path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
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
    }
}
