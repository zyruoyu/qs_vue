const privateData = new WeakMap();

class Person{
    constructor(name, age){
        // this.name = name;
        // this.age = age;
        privateData.set(this, { name, age })
    }
    getName(){
        return privateData.get(this).name;
    }
    getAge(){
        return privateData.get(this).age
    }
}
const zyruoyu = new Person('zyruoyu', 20);
zyruoyu.name = 'zy'
console.log(zyruoyu.getName())
console.log(zyruoyu.getAge())
    
