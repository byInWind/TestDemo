const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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