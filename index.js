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

function once(binaryFunc, count = 0) {
    return (num1, num2) => {
        count++;
        if (count === 1) {
            return binaryFunc(num1, num2)
        }
    }
}

function twice(func) {
    return (num) => {
        return func(num, num);
    }
}

function composeU(func1, func2) {
    return (num) => {
        firstResult = func1(num);
        return func2(firstResult);
    }
}

function composeB(func1, func2) {
    return (num1, num2, num3) => {
        firstResult = func1(num1, num2);
        return func2(firstResult, num3);
    };
}

function limit(func, limit) {
    let count = limit;
    return (num1, num2) => {
        if (count > 0) {
            count -= 1;
            return func(num1, num2);
        };
    }
}
    
    


module.exports = { identity, identityF, add, subtract, multiply, 
                   increment, addF, curry, liftF, once, twice,
                   composeU, composeB, limit };