function arrayUnique(){
    let len = prompt('Enter array length:');
    if (len){
        let array = [];
        let isUnique = true;
        let isFullSame = false;

        for (let i = 0; i < len; i++) {
            let value = prompt('Enter value:');
            array.push(value);
        }

        let count = array.reduce(function(acc, item){
            acc[item] = acc[item] ? acc[item] + 1 : 1;   // {'value': count}
            if (acc[item] == array.length) {
                isFullSame = true;
            } else if (acc[item] > 1) {
                isUnique = false;
            }
            return acc;
        }, {});

        result = Object.keys(count).filter((item) => count[item] > 1);

        if (isFullSame == false){
            alert(`Is your array unique? Thats ${isUnique}`);
            if (isUnique == false){
                alert(`Repeated value(s): ${result}`);
            }
        } else {
            alert('Your array is identic')
        }
    }
}
