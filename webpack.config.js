module.exports = {
    entry: {
        ui: './src/js/ui',
        main: './src/js/index',
        map: './src/js/map'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /node_modules/,
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}