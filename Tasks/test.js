let x = ""
let check = parseInt(x)

if (x == 'true' || x == 'false') {
    console.log('boolean')
} else if (check || x == '0' || x == '-0') {
    if (x.match(/[a-z]/)){
        console.log('Value is unknown')
    } else {
        console.log('num')
    }
} else if (x == 'null' || x == 'NaN' || x == 'undefined') {
    console.log('Value is unknown')
} else {
    console.log('string')
}
// } else if (typeof(Boolean(x)) == 'boolean'){
//     console.log('boo')
// } else if (typeof(String(x) == 'string')) {
//     console.log('stry')
// }
