var webpack = require('webpack');


module.exports = {
    entry: './index-client.js',
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
};
