let fib = {
    n: 5,
    [Symbol.iterator]: function () {
        let i = 1;
        let num1 = 0;
        let num2 = 0;
        return {
            next: () => {
                if (i++ <= this.n) {
                    [num1, num2] = [num2, (num1 + num2) || 1];
                    // num1 = num2;
                    // num2 = (num1+num2) || 1;
                    return {
                        value: num1,
                        done: false,
                    }
                }
                else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }
}


// fib.n = 30;


for (let el of fib) {
    console.log(el);
}