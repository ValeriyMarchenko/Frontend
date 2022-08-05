function wrapArrow() {
    const arrowFunc = (x, n) => {alert(`${x} to ${n} is ${x ** n}`);}
    
    let firstNum = prompt('Enter first number');
    let secondNum = prompt('Enter second number');
    let safeFirstNum = parseInt(firstNum);
    let safeSecondNum = parseInt(secondNum);

    if (firstNum && secondNum) {
        if (firstNum.match(/[a-z]/) || secondNum.match(/[a-z]/)) {
            alert(`Error. First value '${firstNum}' or second value '${secondNum}' is incorrect`);
        } else {
            arrowFunc(safeFirstNum, safeSecondNum);
        }
    } else {
        alert('You didnt enter two numbers');
    }
}

