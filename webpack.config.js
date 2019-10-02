const path = require('path')

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /.tsx?$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
}