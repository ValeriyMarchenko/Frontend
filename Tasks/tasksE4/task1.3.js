/* Написать функцию, которая создает пустой объект, но без прототипа. */



// let a;
// console.log(typeof(a)); //undefined

// a = newObj();
// console.log(typeof(a)); //undefined

// let value = Object.create(null);
// console.log(typeof(value));

function nullObjectWrap() {
    function newObj() {
        let value = Object.create(null);
        return value
    }

    let temp = newObj();
    alert(`Type of value is ${typeof(temp)}`);
}