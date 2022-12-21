// Example of call method

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Sea' },
    { species: 'Monkey', name: 'Ape'}
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log(i + ' ' + this.species
                + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}
