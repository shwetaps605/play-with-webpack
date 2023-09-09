const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "hello-world": "./src/pages/hello-world.page.js",
        "grid":"./src/pages/display-grid.page.js"
    },
    output: {
        filename:"[name].[contenthash].js",
        path: path.resolve(__dirname,"./dist"),
        publicPath: ""
    },
    mode:"production",
    optimization: {
        splitChunks: {
            chunks: "all"
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
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
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
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), "build/**/*")
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "hello-world.html",
            chunks:['hello-world'],
            title: "Webpack Test",
            template: "src/page-template.hbs",
            description:"Some description for Hello World Page",
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: "display-grid.html",
            chunks:['grid'],
            title: "Webpack Test",
            template: "src/page-template.hbs",
            description:"Some description for Grid Page",
            minify: false
        })
    ]
}