/**
 * Created by yuyi on 2016/7/26.
 */
var webpack = require('webpack');

module.exports = {

    entry: {
        index: ['./src/index.js', './src/style.css'],
        // a: './src/a.js',
        // 第三方包
        vendor: [
            'react',
            'react-dom'
        ]
    },

    output: {
        path: './build/',
        // filename: '[name].js',
        filename: 'bundle.js'
    },

    // resolve 指定可以被 import 的文件后缀
    resolve: {
        extensions: ['', '.js', '.json']
    },

    module: {
        loaders: [
            { test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/, },
            // { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: "style!css" },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]

};
