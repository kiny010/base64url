var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
    name: 'server',
    entry: ['babel-polyfill', './lib/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react', 'stage-2']}
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}
