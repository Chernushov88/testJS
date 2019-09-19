const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: 'production'
}