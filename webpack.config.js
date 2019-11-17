const path = require('path');

module.exports = () => {
    const env = process.env.NODE_ENV;
    const isProduction = env === 'prod';
    
    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules : [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        },
        devtool: isProduction? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
}