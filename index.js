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
    
function from(num) {
    let count = num;
    return () => {
        return count ++;
    }
}    

function to(generator, endValue) {
    let count = generator();
    return () => {
        if (count < endValue) {
            return count ++;
        }
    }
}

function fromTo(start, end) {
    let count = 0;
    return () => {
        if (count < end) {
            let currentValue = count + start;
            count++;
            return currentValue;
        };
    };
}

function element(arr, generator = fromTo(0, arr.length -1)) {
    let currentIndex = generator();
    return () => {
        let returnValue = arr[currentIndex];
        currentIndex++;
        return returnValue;
    };
}

function collect(generator = fromTo(), arr) {
    return () => {
        let currentNumber = generator();
        arr.push(currentNumber);
        return currentNumber;
    };
}

function filter(func, predicate) {
    return () => {
        let result = func();
        if (predicate(result)) {
            return result;
        };
    };
}

function concat(gen1, gen2 = fromTo()) {
    return () => {
        let value = gen1();
        while (value != undefined) {
            return value
        } 
        return gen2();
    }
}

function fibonacciF(num1, num2){
    const numbers = [num1, num2];
    return () => {
        numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
        return numbers[numbers.length - 3];
    };
}

function genSymF(symbol) {
        let count = 0;
    return () => {
        let returnSymbol = symbol + count;
        count++;
        return returnSymbol;
    };
}

// need to come back to genSymFF... not yet working...

function genSymFF(func, inputNum) {
    inputNum = func(inputNum);
    return (inputLetter) => {
        let returnNum = inputNum
        return () => {
            console.log(inputLetter + returnNum)
            return inputLetter + returnNum;
  
        }
        
    };
}

function counter(num) {
    let counter = num;
    return {up: 
        () => {
            counter++;
            return counter;
        }, down: 
        () => {
            counter--;
            return counter;
        }};
}

function revokable(func) {
    return {invoke: 
        (num1, num2) => {
            return func(num1, num2)
        }, revoke:
        () => {
            func = () => {};
        }};
}

module.exports = { identity, identityF, add, subtract, multiply, 
                   increment, addF, curry, liftF, once, twice,
                   composeU, composeB, limit, from, to, fromTo,
                   element, collect, filter, concat, fibonacciF,
                   genSymF, genSymFF, counter, revokable };