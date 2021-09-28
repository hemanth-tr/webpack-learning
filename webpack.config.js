const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    plugins: [htmlPlugin],
    output: {
        clean: true
    }
}