const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.join(__dirname, '/'),
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'build/bundle.js',
    },
    plugins: [
        //new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([{
            from: 'public/index.html',
            to: 'build/'
        }]),
        new CopyWebpackPlugin([{
            from: 'public/js',
            to: 'build/js/'
        }]),
        new CopyWebpackPlugin([{
            from: 'public/css',
            to: 'build/css'
        }]),
        new CopyWebpackPlugin([{
            from: 'public/icons',
            to: 'build/icons'
        }]),
        new CopyWebpackPlugin([{
            from: 'public/fonts',
            to: 'build/fonts'
        }]),
        new CopyWebpackPlugin([{
            from: 'public/images',
            to: 'build/images'
        }])
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        clientLogLevel: "none",
        historyApiFallback: true,
        watchContentBase: true
    },
    resolve: {
        modules: ["node_modules", "src"]
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: "babel-loader",
                query: {
                    presets: [
                        'es2017', 'stage-3'
                    ],
                    plugins: [
                        ["transform-h-jsx"],
                        ["syntax-jsx"]
                    ]
                }
            }
        ]
    },
};