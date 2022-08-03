/* Here we can use only one array
   it will be faster and better, but
   for more prettier output and 
   better accessibility of values I have used two */
function arrayList(){
    let len = prompt('Enter array length:');
    let array = [];
    let list = [];

    for (let i = 0; i < len; i++) {
        let value = prompt('Enter value:');
        array.push(value);
        list.push(` \n[${i}] = ${array[i]}`);
    }

    alert(`Array's values are: ${list}`);
    alert(`Array's length is ${array.length}`); // ${len}
}
