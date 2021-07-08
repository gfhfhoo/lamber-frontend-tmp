const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve('src'));
        config.resolve.alias
            .set("&",resolve('public/lib'));
    },
    pages: {
        index: {
            entry: 'src/views/index.ts',
            template: "./public/index.html",
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        backend: {
            entry: 'src/views/backend.ts',
            template: "./public/backend.html",
            chunks: ["chunk-vendors", "chunk-common", "backend"]
        }
    },
    devServer: {
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            rewrites: [
                { from: /\/backend/, to: '/backend.html' }
            ]
        }
    }

}