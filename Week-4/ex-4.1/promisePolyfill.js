function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    let error;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && isCalled === false) {
            onResolve(val);
            isCalled = true;
        }
    }
    function reject(err) {
        isRejected = true;
        error = err;
        if (typeof onReject === 'function' && isCalled === false) {
            onReject(err);
            isCalled = true;
        }
    }
    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    }
    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;
    }


    executor(resolve, reject)

}

MyPromise.resolve = val => {
    return new MyPromise(function executor(resolve, reject) {
        resolve(val);
    })
}

MyPromise.reject = reason => {
    return new MyPromise(function executor(resolve, reject) {
        reject(reason);
    })
}

MyPromise.all = function (promises) {
    return new MyPromise(function executor(resolve, reject) {
        let count = 0;
        let result = []
        if (promises.length === 0) {
            resolve(promises);
            return;
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((val) => {
                done(val, i);
            })
            
        }

        function done(val, i) {
            result[i] = val;
            ++count;
            if (promises.length === count) {
                resolve(result);
            }
        }
    })
}

function getNumber() {
    // generates a random whole number between 1 and 100 
    return Math.floor(Math.random() * 100);
}


const numChecker = ms => new MyPromise((resolve, reject) => {
    let num = getNumber();
    if (num % 5 === 0) {
        setTimeout(() => reject(`Rejected : ${num} is divisible by 5`), ms);
    } else {
        setTimeout(() => resolve(`Passed : ${num} is NOT divisible by 5`), ms);
    }
})

numChecker(2000)
    .then((str) => {
        console.log(str);
    })
    .catch((err) => {
        console.log(err);
    })


MyPromise.all([numChecker(1000), numChecker(2000), numChecker(1500)])
    .then(console.log)
    .catch(console.log);