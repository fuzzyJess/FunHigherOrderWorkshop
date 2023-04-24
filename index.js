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

function increment(num) {
    return add(num, 1) ;
}

function addF(firstNum) {
    return (secondNum) => {
        return add(firstNum, secondNum);
    }
}

function curry(binaryFunc, firstValue) {
    return (secondValue) => {
        return binaryFunc(firstValue, secondValue);
    }
}

function liftF(binaryFunc) {
    return (value1) => {
        return (value2) => {
            return binaryFunc(value1, value2);
        }
    }
}

function once(binaryFunc) {
    return binaryFunc;
}

module.exports = { identity, identityF, add, subtract, multiply, 
                   increment, addF, curry, liftF, once };