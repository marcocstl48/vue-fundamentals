module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8082',
                changeOrigin: true
            }
        }
    }
};