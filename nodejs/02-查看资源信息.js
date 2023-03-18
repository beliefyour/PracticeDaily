// 1.导入fs模块
const fs = require('fs');

// 2. stat 方法 status 缩写 状态
fs.stat('../my-app',(err,data)=>{
    if(err){
        console.log('操作失败');
        return;
    }
    console.log(data);
})
