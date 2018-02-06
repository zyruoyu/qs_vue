var a = {};//被代理或被劫持
//精细化的操作对象的属性访问  
// 三个参数 都是必填 1.目标对象 你要劫持的对象 2.需要定义的属性或方法的名字 3.目标属性所拥有的特性 descriptor
// Object.defineProperty(a,'b',{
//     value: 3445,
//     enumerabel:false,
//     // writable: true,
//     // configurable: false,
// });
// // console.log(Object.keys(a));
// for(key in a){
//     console.log(key)
// }
Object.defineProperty(a,'b',{
    set:function(newValue){
        console.log(`以前的值是${this.value}` );
        this.value = newValue;
        console.log(`新的值是${this.value}`)
    },
    get:function(){
        console.log(`你取我的值${this.value}`);
    }
})
a.b = 100;

a.b
// console.log(a.b);
