// Using Async / Await and Generators, create separate functions and achieve the same functionality.

// Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()


function* doTask1() {
    while (true) {
        console.log('doTask1 called by caller');
        yield* doTask2();
    }
}

function* doTask2() {
    while (true) {
        console.log('doTask2 called by task 1');
        yield* doTask3();
    }
}

function* doTask3() {
    console.log('doTask3 called by task 2');
    yield 10;
}

function* caller() {
    while (true) {
        yield* doTask1();
    }
}


let gen = caller();

console.log(gen.next());
console.log(gen.next());


