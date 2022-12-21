async function doTask1() {
    console.log('doTask1 called by caller');
    return await doTask2();
}

async function doTask2() {
    console.log('doTask2 called by task 1');
    return await doTask3();
}

async function doTask3() {
    console.log('doTask3 called by task 2');
    return 10;
}


async function caller() {
    let result = await doTask1();
    console.log(result);
}

caller();