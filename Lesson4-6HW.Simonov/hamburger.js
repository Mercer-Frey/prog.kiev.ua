function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: 50,
    k: 20,
    name: 'small'
}
Hamburger.SIZE_LARGE = {
    price: 100,
    k: 40,
    name: 'large'
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    k: 20,
    name: 'cheese'
}
Hamburger.STUFFING_SALAD = {
    price: 20,
    k: 5,
    name: 'salad'
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    k: 10,
    name: 'potato'
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    k: 5,
    name: 'mayo'
}
Hamburger.TOPPING_SPICE = {
    price: 15,
    k: 0,
    name: 'spice'
}

Hamburger.prototype.addTopping = function (topping) {
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i].name === topping.name) {
            console.log('Такой топпинг уже есть');
            return;
        }
    }
    this.toppings.push(topping);
}

Hamburger.prototype.removeTopping = function (topping) {
    for (var i = 0; i < this.toppings.length; i++) {
        if (topping.name === this.toppings[i].name) {
            this.toppings.splice(i, 1);
            return;
        }
    }
    console.log('Нет ' + topping.name + ' в списке топпингов');
}


Hamburger.prototype.getToppings = function () {
    return this.toppings;
}


Hamburger.prototype.getSize = function () {
    return this.size;
}


Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    var price = this.size.price + this.stuffing.price;
    for (var i = 0; i < this.toppings.length; i++) {
        price += this.toppings[i].price;
    }
    return price;
}


Hamburger.prototype.calculateCalories = function () {
    var k = this.size.k + this.stuffing.k;
    for (var i = 0; i < this.toppings.length; i++) {
        k += this.toppings[i].k;
    }
    return k;
}




// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_MAYO);
hamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.getToppings());
console.log(hamburger.getSize());
console.log(hamburger.getStuffing());
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());
// добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings()); // 1