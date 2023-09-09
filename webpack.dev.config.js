const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"bundle.[contenthash].js",
        path: path.resolve(__dirname,"./dist"),
        publicPath: ""
    },
    mode:"development",
    devServer: {
        port:9000,
        static: {
            directory: path.resolve(__dirname,"./dist"),
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|PNG)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 3*1024
                    }
                }
            },
            {
                test: /\.txt$/,
                type: "asset/source"
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }, 
            {
                test:/\.hbs$/,
                use: ["handlebars-loader"]
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), "build/**/*")
            ]
        }),
        new HtmlWebpackPlugin({
            title: "Webpack Test",
            template: "src/index.hbs",
            description:"Some description"
        })
    ]
}