function whatType() {
    let xx = prompt('Enter value: ');
    let x = xx.toLocaleLowerCase();
    let check = parseInt(x);

    if (xx) {
        if (x == 'true' || x == 'false') {
            alert(`Value '${xx}' is boolean`);
        } else if (check || x == '0' || x == '-0') {
            if (x.match(/[a-z]/)){
                alert(`Value '${xx}' is string`);
            } else {
                alert(`Value '${xx}' is number`);
            }
        } else if (x == 'null') {
            alert(`Type of value '${xx}' is object`);   
        } else if (x == 'undefined') {
            alert(`Type of value '${xx}' is undefined`);   
        } else if (x == 'NaN') {
            alert(`Value '${xx}' is number`);
        } else {
            alert(`Value '${xx}' is string`);
        }
    }
}

// This func is right for E2 2.3 
function RightOne(){
    let x = prompt();
    let res = typeof(x);

    switch (res) {
        case 'number':
            alert('value is number');
            break;
        case 'boolean':
            alert('value is boolean');
            break;
        case 'string':
            alert('value is string');
            break;
        default:
            alert('type of value is unknown');
            break;
    }
}
