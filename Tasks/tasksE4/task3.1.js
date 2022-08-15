/* Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6. */

class ParentDevice {
    constructor(name, price) {
        this.name = name; //param
        this.price = price; //param
        this.voltageReq = 220; //voltage
    }

    isPowered = function(bool = true) {
        console.log(`Is ${this.name} now powered? -> ${bool ? 'Yes' : 'No'}`);
    }

    connectionMethod = function(method){
        switch(method) {
            case 'deafult':
                console.log('Connected by deafult');
                break;
            case 'another':
                console.log('Connected by another method');
                break;
            default:
                console.log('Deafult method');
                break;
        }
    }

    compatibility = function(){ //redefine func
        console.log('No compatibility')
    }

    powerReq = function(I) {
        console.log(`Power requirement is ${this.voltageReq * I} watt`)
    }
}

////////////////////////////////////////////////////

class ComputerDevice extends ParentDevice {
    constructor(name, price, hertz){
        super(name, price);
        this.name = name;
        this.price = price;
        this.hertz = hertz;
    }

    additionalDevices = function(string) {
        console.log(`This device has additional devices such as: ${string}`)
    }
    
    compatibility = function() {
        console.log('This computer is compatible')
    }
}

const computer = new ComputerDevice('compi', '1555$', '144hz')

computer.additionalDevices('mouse, keyboard, headphones')
computer.compatibility()
computer.connectionMethod('deafult')
computer.isPowered("true")
computer.powerReq(115)

////////////////////////////////////////////////////

class CoffeeMachineDevice extends ParentDevice{
    constructor(name, price){
        super(name, price);
        this.name = name;
        this.price = price;
    }
}

const coffeeMachine = new CoffeeMachineDevice('Coffee', '300$')

console.log('////////////////////////')
coffeeMachine.compatibility()
coffeeMachine.connectionMethod('deafult')
coffeeMachine.isPowered("true")
coffeeMachine.powerReq(100)

console.log(computer)
console.log(coffeeMachine)