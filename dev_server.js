const { resolve } = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');
const npm_config = require('./package.json');
const PORT = process.env.PORT || 3000;

// Webpack 5 requires defining the DevServer options separately
const devServerOptions = {
    static: {
        directory: resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true, // Enable gzip compression
    port: PORT,
    open: true, // Open browser after server had been started
    proxy: npm_config.proxy,
    hot: false, // Set to true if using HMR
    client: {
        logging: 'info', // Can be set to 'none', 'error', 'warn', 'info', or 'log'
        overlay: { // Show errors and warnings in the browser
            errors: true,
            warnings: false,
        },
    },
    devMiddleware: {
        publicPath: '/',
        stats: 'minimal', // Can be 'none', 'errors-only', 'minimal', 'normal', or 'detailed'
    },
};

WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);

const compiler = webpack(config);
const server = new WebpackDevServer(devServerOptions, compiler);

server.start().then(() => {
    console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', 'Dev server running at ', 'http://localhost:' + PORT);
    console.log('\x1b[32m%s\x1b[0m', '\nWebpack compiling...\n');
}).catch(err => {
    console.error(err);
    console.log('\n\x1b[37m%s\x1b[33m%s\x1b[37m%s\x1b[36m%s\x1b[33m%s\x1b[0m\n\n', '========', ' REACT DEV SERVER START ERROR ','========','\nError occurred starting the server on PORT:', PORT);
});
