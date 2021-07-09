const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        index: "index.html",
        port: 9000,
        writeToDisk: true
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
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", "sass-loader"
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
        new HtmlWebPackPlugin()
        // new HtmlWebPackPlugin({
        //     title: "Webpack Intergrations",
        //     filename: "subfolder/custom_filename.html",
        //     meta: {
        //         description: "Some description"
        //     }
        // })
        // new HtmlWebPackPlugin({
        //     title: "Wepack Intergrations",
        //     template: "src/index.hbs",
        //     description: "Some description"
        // })
    ]
}