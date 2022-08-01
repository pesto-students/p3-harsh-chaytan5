function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment(); 
increment();
log();// What is logged?

// Count is 0

// This happens because the message is updated only while the function call and not during increment function call.