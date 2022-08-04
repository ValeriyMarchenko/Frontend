function numbers(){
    let value = prompt('Enter number please: ');
    let tryValue = +value;

    if (value){
        if (typeof(tryValue) == "number" && !isNaN(tryValue)) {
            if (tryValue == 0){
                alert('Number is zero');
            } 
            else if (tryValue % 2 != 0){
                alert(`Number ${tryValue} is odd`);
            } else {
                alert(`Number ${tryValue} is even`);
            }
        } else {
            alert('Error. Enter a number');
        }
    }
}
