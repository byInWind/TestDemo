const path = require("path");
//没看懂的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//通常，在每次构建前清理 /dist 文件夹，只会生成用到的文件,其它文件删除
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        //入口变成两个
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '输出 管理'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    //在js里引入css的依赖 npm install --save-dev style-loader css-loader
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|webp)$/,
                use: [
                    //在js里引入图片的依赖（在js里引入的css里引入的图片也需要这样处理） npm install --save-dev file-loader
                    'file-loader'
                ]
            }
        ]
    }
}