/**
 * configures production optimizations/environment
 */
const OptimzeCssAssetsPlugin= require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true
                    }
                }
            })
        ]
    },
    plugins: [ 
        new OptimzeCssAssetsPlugin(),
    ]
}
