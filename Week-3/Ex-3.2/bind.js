// Bind method example

const chocolates = {
    cadbury: 'Silk',
    nestle: 'Kit kat',
    lindt: 'Dark chocolate',
    printChoco: function () {
        console.log( this.lindt +` is better than ` + this.nestle + ` and ` + this.cadbury)
    }
}

let fn = chocolates.printChoco; 
fn(); // undefined is better than undefined and undefined

fn = chocolates.printChoco.bind(chocolates);
fn(); // Dark chocolate is better than Kit kat and Silk
