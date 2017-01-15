const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './handler.js'
    ],
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        }]
    }
};

