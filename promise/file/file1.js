// const fs=require("fs");  
 const fs=require("fs");  
// var data=rf.readFileSync("input.txt","utf-8");  
// var data2=rf.readFileSync("input2.txt","utf-8"); 
// var data3=rf.readFileSync("input3.txt","utf-8"); 
// console.log(data.toString());  
// console.log(data2.toString()); 
// console.log(data3.toString()); 
// console.log("READ FILE SYNC END");
//回调函数
// node异步无阻塞 高并发 能迅速降低服务器成本 提高性能 降低服务器需求
// 异步和同步放在一起 失去了顺序控制的灵活性
//回调地狱
// fs.readFile('input.txt',function(err,data){
//     console.log(data.toString());
//     fs.readFile('input2.txt',function(err,data){
//         console.log(data.toString());
//         fs.readFile('input3.txt',function(err,data){
//             console.log(data.toString())
//         })
//     })
// })
function readFile1(){
    return new Promise((resolve,reject) =>{
        fs.readFile('input.txt',(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
};
function readFile2(){
    return new Promise((resolve,reject) =>{
        fs.readFile('input2.txt',(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
};
function readFile3(){
    return new Promise((resolve,reject) =>{
        fs.readFile('input3.txt',(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
};
readFile1().then(data=>{
    console.log(data.toString());
    return readFile2();
}).then(data=>{
    console.log(data.toString());
    return readFile3();
}).then(data=>{
    console.log(data.toString())
})

// fs.readFileSync('input.txt',(err,data) => {
//     if(err){
//         return console.error(err);
//     }else{
//         console.log(data.toString());
//     }
// }) 
// fs.readFileSync('input2.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// }) 
// fs.readFileSync('input3.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// }) 