function reverseSrt(){
    let str = prompt('Enter string: ');
    let res =str.split('').reverse().join('');
    alert(`Mirror string is: '${res}'`);
}
