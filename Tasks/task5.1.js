function arrayUnique(){
    let len = prompt('Enter array length:');
    let array = [];
    let isUnique = true;

    for (let i = 0; i < len; i++) {
        let value = prompt('Enter value:');
        array.push(value);
    }

    let count = array.reduce(function(acc, item){
        acc[item] = acc[item] ? acc[item] + 1 : 1;   // {'value': count}
        if (acc[item] > 1) {
            isUnique = false;
        }
        return acc;
    }, {});

    result = Object.keys(count).filter((item) => count[item] > 1);

    alert(`Is your array unique? Thats ${isUnique}`);
    if (isUnique == false){
        alert(`Repeated values are: ${result}`);
    }
}
