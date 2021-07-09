const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js",
        "pc": "./src/pc.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000, //10KB
            automaticNameDelimiter: "_"
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    "handlebars-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         "**/*"
        //     ]
        // }),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         "**/*",
        //         path.join(process.cwd(), "build/**/*") //clean other folders
        //     ]
        // })
        // new HtmlWebPackPlugin()
        // new HtmlWebPackPlugin({
        //     title: "Webpack Intergrations",
        //     filename: "subfolder/custom_filename.html",
        //     meta: {
        //         description: "Some description"
        //     }
        // })
        new HtmlWebPackPlugin({
            filename: "hello-world.html",
            chunks: ["hello-world"],
            title: "Hello World",
            template: "src/page-template.hbs",
            description: "Some description"
        }),
        new HtmlWebPackPlugin({
            filename: "pc.html",
            chunks: ["pc"],
            title: "Computer",
            template: "src/page-template.hbs",
            description: "Some Computer"
        })
    ]
}