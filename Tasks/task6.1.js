function mapList() {
    let len = prompt('Enter map size:');
    let map = new Map();

    for (let i = 0; i < len; i++) {
        let key = prompt("Enter key: ");
        let value = prompt("Enter value: ");
        map.set(key, value);
        alert('Next');
    }

    for (let key of map.keys()) {
        alert(`Here:\n Key: ${key} => Value: ${map.get(key)}`);
    }
}

/* Because prompt returns only strings, Map cannot accept other values. 
   As a consequence, below I present another function */

function workable() {
    let map = new Map();
    map.set('key_1', 2);
    map.set( 1 , 'value_2');

    for (let key of map.keys()) {
        console.log(`Here:\n Key: ${key} => Value: ${map.get(key)}`);
    }
}
