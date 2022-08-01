function getNumber() {
    // generates a random whole number between 1 and 100 
    return Math.floor(Math.random() * 100);
}

// console.log(getNumber());

const numChecker = ms => new Promise((resolve, reject) => {
    let num = getNumber();
    if (num % 5 === 0) {
        setTimeout(() => reject(`Rejected : ${num} is divisible by 5`), ms) ;
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


// const delay = ms =>
//     new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(Math.random() * 1000), ms);
//     })