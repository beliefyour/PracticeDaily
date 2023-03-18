const fs = require('fs');

//单个创建
// fs.mkdir('./html',{recursive: true},err=>{
//     if(err){
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// })

//递归创建
// fs.mkdir('./a/b/c',{recursive: true},err=>{
//     if(err){
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// })

//读取文件夹  read 读取
// fs.readdir('./a',(err,data)=>{
//     if(err){
//         console.log('读取失败');
//         return;
//     }
//     console.log(data);
// })

//删除文件夹
// fs.rm  删除更常用
fs.rmdir('./html',err =>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

/*
fs.rename
    1.换名字
    2.替换文件位置
    fs.rename('./lunyu.txt','../lunyu2.txt', err =>{
    if(err){
        console.log('操作失败');
        return;
    }
    console.log('操作成功');

删除文件
fs.unlink
fs.rm
    
    fs.unlink('../lunyu2.txt', err=>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

})
*/

