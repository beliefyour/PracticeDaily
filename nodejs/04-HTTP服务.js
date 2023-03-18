// 1.导入http模块
const http = require('http');
// 2.创建服务对象
const server = http.createServer((request,response) =>{
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end('你好啊');//设置响应体
});

// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动.......');
})

/* 
注意事项
    1.命令行Ctrl+c 停止服务
    2.当服务启动后，更新代码必须重启服务才能生效
    3.处理响应体中有中文会乱码的解决问题
        response.setHeader('content-type','text/html,charset=utf-8');
    4.端口被占用的问题
        可以换一个端口号，或者是把之前那个端口进程 结束
*/