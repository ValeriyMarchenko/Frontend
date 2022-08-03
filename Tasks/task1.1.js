function change(){
    let value = prompt("Input amount of rub: ");
    let changedValue = Math.round(value / 63);
    alert("You have " + changedValue + " dollars");
}
