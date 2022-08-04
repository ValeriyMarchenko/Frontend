function arrayOddEven(){
    let len = prompt('Enter array length:');
    if (len) {
        let array = [];
        let nul = 0;
        let odd = 0;
        let even = 0;

        for (let i = 0; i < len; i++) {
            let value = prompt('Enter value:');
            array.push(value);
        }

        for ( i in array){
            if (array[i] == 0) {
                nul += 1;
            }
            else if (array[i].match(/[1-9]/)) {
                if (array[i] % 2 == 0) {
                    even += 1;
                } else {
                    odd += 1;
                }
            } 
        }

        alert(`Here we have: \n Null numbers: ${nul}; \n Odd numbers: ${odd}; \n Even numbers: ${even}`);
    }
}
