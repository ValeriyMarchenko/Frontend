const newPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let num = Math.floor(Math.random() * 101);
        if (num % 2 == 0){
            resolve(`Complete. Number is ${num}`);
        } else {
            reject(`Fail. Number is ${num}`);
        }
    }, 3000);
});


newPromise
    .then((result) => {
        console.log('Resolve completing...', result);
    })
    .catch((error) => {
        console.log('Reject completing...', error);
    })
    
