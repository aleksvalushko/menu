const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }
    ],
}