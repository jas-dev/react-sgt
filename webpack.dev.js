const webpack = require('webpack');
const merge = require('webpack-merge');
const isDevelopment = process.env.NODE_ENV !== 'production';
const common = require('./webpack.common');
const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
    entry: [
        '@babel/polyfill',
        'webpack-dev-server/client?http://localhost:' + PORT,
        './index.js'
    ],
    devtool: 'inline-source-map',
    mode: isDevelopment ? 'development' : 'production',
    plugins: [
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
    }
});