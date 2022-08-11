/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function isObjectHasProperty(obj, str) {
    return obj.hasOwnProperty(str)
}

const newObj = {
    phone: '12345',
    name: 'Mark',
    city: 'New York'
}

console.log(isObjectHasProperty(newObj, 'ww'))