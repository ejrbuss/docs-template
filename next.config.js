const withLess = require('@zeit/next-less')

module.exports = withLess({
    assetPrefix: process.env.NODE_ENV === 'production' ? '/docs-template' : '',
    webpackDevMiddleware(config) {
        config.watchOptions = {
            ignored: [
                /\.git\//,
                /\.next\//,
                /deps/,
                /node_modules/,
            ]
        }
        return config;
    },
});