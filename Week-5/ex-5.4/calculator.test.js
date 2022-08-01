// import mathOperations from "./scripts.js";

const operations = require('./scripts')


console.log(operations.sum(2, 5));

console.log(operations.diff(10, 5));

test('Test sum operation', () => {
    expect(operations.sum(5, 5)).toBe(10);
})

test('Test subtraction operation', () => {
    expect(operations.diff(20, 9)).toBe(11);
})

test('Test multiplication operation', () => {
    expect(operations.product(7, 3)).toBe(21);
})