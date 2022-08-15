/* Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы */

function ParentDevice(name, price) {
    this.name = name, //param
    this.price = price, //param
    this.voltageReq = 220 //voltage
}

ParentDevice.prototype.isPowered = function(bool = true) {
    console.log(`Is ${this.name} now powered? -> ${bool ? 'Yes' : 'No'}`);
}

ParentDevice.prototype.connectionMethod = function(method){
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

ParentDevice.prototype.compatibility = function(){ //redefine func
    console.log('No compatibility')
}

ParentDevice.prototype.powerReq = function(I) {
    console.log(`Power requirement is ${this.voltageReq * I} watt`)
}

////////////////////////////////////////////////////

function ComputerDevice(name, price, hertz) {
    this.name = name, 
    this.price = price,
    this.hertz = hertz
}

ComputerDevice.prototype = new ParentDevice()

ComputerDevice.prototype.additionalDevices = function(string) {
    console.log(`This device has additional devices such as: ${string}`)
}

ComputerDevice.prototype.compatibility = function() {
    console.log('This computer is compatible')
}

const computer = new ComputerDevice('compi', '1555$', '144hz')

computer.additionalDevices('mouse, keyboard, headphones')
computer.compatibility()
computer.connectionMethod('deafult')
computer.isPowered("true")
computer.powerReq(115)

////////////////////////////////////////////////////

function CoffeeMachineDevice(name, price) {
    this.name = name, 
    this.price = price
}

CoffeeMachineDevice.prototype = new ParentDevice()

const coffeeMachine = new CoffeeMachineDevice('Coffee', '300$')

console.log('////////////////////////')
coffeeMachine.compatibility()
coffeeMachine.connectionMethod('deafult')
coffeeMachine.isPowered("true")
coffeeMachine.powerReq(100)

console.log(computer)
console.log(coffeeMachine)

