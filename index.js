const interface = require('readline-sync');
var calculator = require('./app/calculator');

const firstNum = interface.question('enter the first number. ');
const secondNum = interface.question('enter the second number. ');

var a = parseInt(firstNum);
var b = parseInt(secondNum);

console.log(`Add ${a} + ${a} = ${calculator.add(a, b)}`);
console.log(`Minus ${a} + ${a} = ${calculator.minus(a, b)}`);
console.log(`Multiply ${a} + ${a} = ${calculator.multiply(a, b)}`);
console.log(`Divide ${a} + ${a} = ${calculator.divide(a, b)}`);
