/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function searchWrap(){
    function isObjectHasProperty(obj, str) {
        return obj.hasOwnProperty(str);
    }

    function ask() {
        let string = prompt('Enter string you want to check');
        return string;
    }

    const newObj = {
        phone: '12345',
        name: 'Mark',
        city: 'New York'
    }

    let method = prompt('What code you would like to use? 1 -> experemental, 2 -> simple');

    switch(method) {
        case '1':
            let len = prompt('Enter object size:');
            let obj = {};
            let fisrtCase = ask();
            alert('Now create an object')

            for (let i = 0; i < len; i++) {
                let key = prompt("Enter key: ");
                let value = prompt("Enter value: ");
                obj[key] = value;
                alert('Next');
            }

            alert(`Answer: ${isObjectHasProperty(obj, fisrtCase)}`);
            break;
        case '2':
            let secondCase = ask();
            alert(`Answer: ${isObjectHasProperty(newObj, secondCase)}`);
            break;
        default:
            break;
    }

    // console.log(isObjectHasProperty(newObj, 'ww'))
}

