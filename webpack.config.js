const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'build/bundle.js',
    },
    plugins: [
        //new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([{ from: 'public/index.html', to: 'build/' }])
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        clientLogLevel: "none",
        historyApiFallback: true,
        watchContentBase: true
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "css-loader" },
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
                  plugins: [
                    ["transform-h-jsx"],
                    ["syntax-jsx"]
                  ]
                }
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader'
                }, {
                    loader: 'virtual-dom-loader?jsx=h'
                }, {
                    loader: 'ts-loader',
                    options: {
                        configFile: "./tsconfig.server.json"
                    }
                }],
            }
        ]
    },
};
