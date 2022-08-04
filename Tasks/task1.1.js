function change(){
    let value = prompt("Input amount of rub: ");
    let changedValue = Math.round(value / 63);
    if (value){
        alert("You have " + changedValue + " dollars");
    }
}
