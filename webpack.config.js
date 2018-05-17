const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 页面入口文件配置
    entry: {
        index: './js/index.js'
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: '../'
    },
    // 插件项
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        // new HtmlWebpackPlugin({
        //     template: './page/index.html',
        //     filename: './page/index.html',
        //     inject: 'body',
        //     chunks: ['index']
        // }),
        new CopyWebpackPlugin([{
            from: __dirname + '/lib',
            to: __dirname + '/dist/lib'
        }, {
            from: __dirname + '/page',
            to: __dirname + '/dist/page'
        }, {
            from: __dirname + '/css/images',
            to: __dirname + '/dist/css/images'
        }])
    ],
    
    
    module: {
        // 加载器配置
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    "postcss-loader"
                ]
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            })
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        }, {
                test: /\.(ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    },
    resolve: {

    },
    externals: {
        jquery: 'jQuery'
    }
};
