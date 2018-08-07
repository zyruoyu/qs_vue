const cache = new WeakMap();

function countOwmKeys(obj){
    if(cache.has(obj)){
        console.log('cached');
        return cache.get(obj)
    }else{
        const count = Object.keys(obj).length;
        cache.set(obj, count);
        return count;
    }
}

const obj = { a: 1, b: 2, c: 3};
console.log(countOwmKeys(obj))
console.log(countOwmKeys(obj))//走的是缓存
console.log(countOwmKeys(obj))
