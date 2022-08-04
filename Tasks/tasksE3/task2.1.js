function isPrimeNumber() {
    let number = prompt('Enter number less then 1000: ');
    if (number) {
        let isPrime = true;
        if (number > 1000 || number.match(/[a-z]/)) {
            alert(`Error. You have entered ${number}, its incorrect. Try again.`); //result = `error string`
        } else {
            if (number == 0 || number == 1) {
                alert('0 and 1 are not prime numbers')
            } else {
                for (let i = 2; i * i <= number; i++) {
                    if (number % i == 0) {
                        isPrime = false;
                    } 
                }
                if (isPrime == true) {
                    alert(`Number ${number} is prime`); // result = `is prime string`
                } else {
                    alert(`Number ${number} is not prime`); // result = `is not prime string`
                }
            }
        }
    }
    // return result;
}

