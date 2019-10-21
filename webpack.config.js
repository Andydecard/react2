const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./index.jsx",
    },
    context: `${__dirname}/static_src`,
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        "@babel/react"
                    ]
                }
            }
        ]
    }
};