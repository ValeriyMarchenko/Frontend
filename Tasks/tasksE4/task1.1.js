/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */

function getParam(object) {
    let list = [];
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            list.push(` ${key} -> ${object[key]} `);
        }
    }
    alert(list);
}

function objWrap(){
    let len = prompt('Enter object size:');
    if (len){
        let obj = {};

        for (let i = 0; i < len; i++) {
            let key = prompt("Enter key: ");
            let value = prompt("Enter value: ");
            obj[key] = value;
            alert('Next');
        }

        getParam(obj);
    }
}

// const newObj = {
//     phone: '12345',
//     name: 'Mark',
//     city: 'New York'
// }

// getParam(newObj);
