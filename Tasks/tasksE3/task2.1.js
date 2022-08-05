function wrapPrime(){
    function isPrimeNumber(number) {
        let isPrime = true;
        if (number > 1000 || number.match(/[a-z]/)) {
            result = alert(`Error. You have entered '${number}', its incorrect. Try again.`); 
        } else {
            if (number == 0 || number == 1) {
                alert('0 and 1 are not prime numbers');
            } else {
                for (let i = 2; i * i <= number; i++) {
                    if (number % i == 0) {
                        isPrime = false;
                    } 
                }
                if (isPrime == true) {
                    result = alert(`Number ${number} is prime`); 
                } else {
                    result = alert(`Number ${number} is not prime`); 
                }
            }
        }
        return result;
    }

    let number = prompt('Enter number less then 1000: ');
    if (number) {
        isPrimeNumber(number);
    }
}

