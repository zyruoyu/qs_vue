function Vue(option){
    this.data = option.data || {};
    this.methods = option.methods || {};
    Object.keys(this.data).forEach(key=>{
        this.proxyKeys(key);
    });
    new Compile(option.el, this);
    // mounted发生的最佳时期 生命周期函数无非就是在相应时刻发生的时间钩子
    option.mounted.call(this);
    observe(this.data);
    // new Compile(option.el, this)
}
Vue.prototype = {
    proxyKeys(key){
        var self = this;
        console.log(key);
        Object.defineProperty(this, key ,{
            enumerable:false,
            configurable:true,
            get:function getter(){
                console.log(`你在获取一个值${key}`);
                return self.data[key];
            },
            set:function setter (newVal){
                console.log(`你设置了一个${key}值为${newVal}`)
                self.data[key] = newVal;
            }
        })
    }
}