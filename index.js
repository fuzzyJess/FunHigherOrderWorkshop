function identity(arg) {
    return arg
};

function identityF(arg) {
   function returnFunction() {
    return identity(arg);
   }
    return returnFunction;
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

module.exports = { identity, identityF, add, subtract, multiply };