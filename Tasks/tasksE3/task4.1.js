function wrapInterval() {
    function logNum(begin, end) {
        let currrent = begin;
        let intervalID = setInterval(function() {
            alert(currrent);
            if (currrent == end) {
                clearInterval(intervalID);
            }
            currrent++;
        }, 2500);
    }

    let firstNum = prompt('Enter first number');
    let secondNum = prompt('Enter second number');
    let safeFirstNum = parseInt(firstNum);
    let safeSecondNum = parseInt(secondNum);

    if ( firstNum && secondNum) {
        if (firstNum.match(/[a-z]/) || secondNum.match(/[a-z]/)) {
            alert(`Error. First value '${firstNum}' or second value '${secondNum}' is incorrect`);
        } else {
            logNum(safeFirstNum, safeSecondNum);
        }
    } else {
        alert('You didnt enter two numbers');
    }
}
