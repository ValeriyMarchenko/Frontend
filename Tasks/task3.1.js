function reverseSrt(){
    let str = prompt('Enter string: ');
    if (str){
        let res =str.split('').reverse().join('');
        alert(`Mirror string is: '${res}'`);
    }
}
