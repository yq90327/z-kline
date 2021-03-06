module.exports = {
    entry: './src2/KLine.js',
    output: {
        filename: 'KLine.js',
        library: 'KLine',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
