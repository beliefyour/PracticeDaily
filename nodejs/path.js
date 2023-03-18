const path = require('path');

// resolve (常用) 拼接规范的绝对路径
console.log(path.resolve(__dirname,'index.html'));

// sep 分隔符
console.log(path.sep);

// parse 方法
let str = 'D:\\nodeJS\\13-path\\代码\\path.js';
console.log(path.parse(str));

//basename  获得路径的基础名称
console.log(path.basename(str));

//dirname   获取路径的目录名
console.log(path.dirname(str));

//extname   获得路径的扩展名
console.log(path.extname(str));