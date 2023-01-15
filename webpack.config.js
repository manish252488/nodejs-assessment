const nodeExternal = require('webpack-node-externals');
const path = require('path');
const env = process.env.NODE_ENV;
console.log('env::',env)
module.exports = {
    target: 'node',
    mode: env,
    externals: [nodeExternal()],
    entry: {
        'index': './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}