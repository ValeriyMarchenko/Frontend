/* Написать функцию, которая создает пустой объект, но без прототипа. */

function newObj() {
    let value = Object.create(null);
    console.log(typeof(value));
    return value
}

let a;
console.log(typeof(a)); //undefined

a = newObj();
console.log(typeof(a)); //undefined

let value = Object.create(null);
console.log(typeof(value));
