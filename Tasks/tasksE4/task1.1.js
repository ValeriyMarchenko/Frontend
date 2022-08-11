/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */

function getParam(object) {
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key} -> ${object[key]}`)
        }
    }
}

const newObj = {
    phone: '12345',
    name: 'Mark',
    city: 'New York'
}

getParam(newObj);