/**
 * Created by star on 2016/10/20.
 */
var autoHtml = require('html-webpack-plugin');
module.exports = {
    entry:{
        'build-index':'./app/Add-on_animation/index.js'
    },
    output: {
        path: "./app/Add-on_animation",
        filename: '[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['babel?presets[]=react'],
                exclude:'./node_modules/'
            }
        ]
    },
    plugins:[
        new autoHtml({
            template:'./app/Add-on_animation/index.html',
            filename:'build-index.html',
            inject:true
        })
    ]
};