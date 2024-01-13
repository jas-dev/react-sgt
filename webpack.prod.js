const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: ['./index.js'],
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
});
