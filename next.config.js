const withLess = require('@zeit/next-less')

module.exports = withLess({
    assetPrefix: process.env.NODE_ENV === 'production' ? '/docs-template/docs' : '',
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