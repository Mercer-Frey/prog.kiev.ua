// var engine = function () {
//     return 'GOGOGO ' + this.make;
// }

var Car = function (make, model) {
    this.make = make;
    this.model = model;
}

// var car = {
//     wheelsNum: 4,
//     engine: function () {
//         return 'GOGOGO ' + this.make;
//     }
// }

// Car.prototype = car;

Car.prototype.engine = function () {
    return 'GOGOGO ' + this.make;
}

var car1 = new Car('Audi', 'RS6');
// car1.__proto__ = car;
var car2 = new Car('BMW', 'X6');
// car2.__proto__ = car;
console.log(car1);
console.log(car2);
// console.log(car1.wheelsNum);
// console.log(car2.wheelsNum);
console.log(car1.engine());
console.log(car2.engine());

// var human = {
//     breath: true
// }

// var man = {
//     hair: 'short'
// }

// var woman = {
//     hair: 'long'
// }

// man.__proto__ = human;
// woman.__proto__ = human;

// console.log(man.breath);
// console.log(woman.breath);