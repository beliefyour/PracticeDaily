const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

// 2.创建HTML  插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',  //指定原文件的存放路径
    filename:'./index.html'       //指定生成的文件的存放路径
})


module.exports = {
    // mode来指定构建模式，可选值有development 和production
    // 开发的时候一定要用development，因为追求的是打包的速度，而不是体积。
    // 上线用production，上线追求的是体积
    mode: 'development',
    //  devtool  最佳实践
    devtool: 'nosoures-source-map',
    plugins:[htmlPlugin,cleanPlugin],
    entry:path.join(__dirname,'./src/index.js'),    //打包入口文件路径
    output:{                                        //输出文件的存放路径
        path: path.join(__dirname,'dist'),
        // 明确告诉webpack把生成的 bundle.js 文件存放到dist目录下的js子目录中 
        filename:'js/bundle.js'                        //输出文件的名称
    },
    devServer:{
        open:true,//初次打包完成后，自动打开浏览器
        host:'127.0.0.1',//实时打包所使用的主机地址
        port: 80,//实时打包所使用的的端口号
    },
    module:{    //所有第三方文件模块的匹配机制
        rules:[ //文件后缀名的匹配规则
            {  test: /\.css$/,use: ['style-loader','css-loader']},
            //处理 .less文件的loader
            {  test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            //文件后缀名的匹配规则
            {  test:/\.jpg|png|gif$/,
               use: {
                        loader:'url-loader',
                        options: {
                            limit:22228,
                            //明确指定把打包生成的图片文件，储存到 dist 目录下的 image文件夹中
                            outputPath: 'image',
                        }
                    }
            },
            // 注意：必须使用exclude指定排除项，因为 node_modules 目录下的第三方包不需要被打包
            {  test:/\.js$/,use:  'babel-loader',exclude:'/node_modules/'}
        ]
    }
    

}