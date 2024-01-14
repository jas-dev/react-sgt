const merge = require('webpack-merge');
const common = require('./webpack.common');
const PORT = process.env.PORT || 3000;

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = merge(common, {
    entry: [
        'webpack-dev-server/client?http://localhost:' + PORT,
        './index.js'
    ],
    devtool: 'inline-source-map',
    mode: 'development', 
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin() // Add the React Refresh Plugin conditionally
    ].filter(Boolean), // Filter to remove false values in case of production mode
    devServer: {
        hot: true, // Enable Hot Module Replacement
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            // This part is handled in the Babel configuration file
                            // plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                        },
                    },
                ],
            },
        ],
    }
});