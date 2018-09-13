var price = 0; // надо узнать цену, нолик ставим что б сразу определить тип переменной
var img;

var memory = [ // Массив из обьектов с свойствами памяти и цены (у каждой памяти свое значение цены)
    {val: 16, price: 100},
    {val: 32, price: 200},
    {val: 64, price: 300}
];

var color = [ // Массив из обьектов с свойствами цвета, добавочной стоимости и соответствующей картинки (у каждого цвета своя надбавка в цене)
    {is: 'red', add: 50, img: 'red.png',},
    {is: 'silver', add: 75, img: 'silver.png'},
    {is: 'black', add: 100, img: 'black.png'}
];

label:while(true){ // запускаем цикл который запрашивает одно из значений
    var mem = prompt('type memory value - 16, 32, 64','');
    if (mem === null) { // prompt при отмене возвращает null
        break; // если null
    };
    for (var i = 0; i < memory.length; i++) { // если не null, то циклом проверяем значение на соответствие одному из значений памяти первого массива
        if (+mem === memory[i].val) { // плюсик для перевода строки в число, i - индекс элемента массива, после точки - значение которое проверяем
            price = price + memory[i].price; // в случае совпадения суммируем нач.цену с свойством price которое соответствует выбраному индексу [i]
            break label; // прерываем цикл по метке label
        };
    };
};

label2:while(price !== null && mem !== null){
    var col = prompt('type color - red, silver, black', '');
    if (col === null) {
        break;
    };
    for (var j = 0; j < color.length; i++) {
        if(col === color[j].is){
            price = price + color[j].add;
            img = color[j].img; // Выбираем картинку
            break label2;
        };
    };
};

if(price && col) {
    document.write('<img src="img/'+img+'" style="width: 15%; display: block; margin: 0 auto;">');
    document.write('<h1 style="color: '+color[j].is+'; text-align: center;">Цена: '+price+'$</h1>');
    document.write('<h1 style="color: '+color[j].is+'; text-align: center;">Memory: '+memory[i].val+' gb</h1>');
} else {
    document.write('<img src="img/default.png" style="width: 20%; display: block; margin: auto;">');
    document.write('<h1 style="text-align: center;">Цена: 0 $</h1>');
    document.write('<h1 style="color: red; text-align: center;">ПОКА!</h1>');
};
