function wrapClass() {
    function firstClassFunc(firstNumber) {
        return function inFuncClass(secondNumber) {
            return result = firstNumber + secondNumber;
        }
    }

    let firstNum = prompt('Enter first number');
    let secondNum = prompt('Enter second number');
    let safeFirstNum = parseInt(firstNum);
    let safeSecondNum = parseInt(secondNum);

    if (firstNum && secondNum) {
        if (firstNum.match(/[a-z]/) || secondNum.match(/[a-z]/)) {
            alert(`Error. First value '${firstNum}' or second value '${secondNum}' is incorrect`);
        } else {
            const getFirst = firstClassFunc(safeFirstNum);
            const sum = getFirst(safeSecondNum);
            alert(`Sum is: ${sum}`);
        }
    } else {
        alert('You didnt enter two numbers');
    }
}


function firstClassFunc(firstNumber) {
    return function inFuncClass(secondNumber) {
        return result = firstNumber + secondNumber;
    }
};

const getFirst = firstClassFunc(5);

const sum = getFirst(4);

console.log(sum);
