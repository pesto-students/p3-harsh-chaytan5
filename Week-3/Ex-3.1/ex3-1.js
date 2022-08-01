function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log(`Called by ` + key);
        console.log(cache);
        if (cache.has(key)) {
            return cache.get(key);
        }
        console.log(`This value is not in cache`);
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}



//Given reducer method:
function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            console.log('Enter numbers only');
            return false;
        } else {
            sum = sum + arguments[i];
        }
    }
    return sum;
}


// Create a method called memoize such that: 
const memoizeAdd = memoize(add);

//then calling...
console.log(memoizeAdd(100, 100)); //returns 200
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 100)); //returns 200
console.log(memoizeAdd(100, 200)); //returns 300
console.log(memoizeAdd(500, 200, 100, 700, 600));
console.log(memoizeAdd(100, 200));//returns 300

console.log(memoizeAdd(100, 'abc'));


