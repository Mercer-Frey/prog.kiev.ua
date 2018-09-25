(function () {

    // var f1 = function (start, step) {
    //     if (!start) start = 0;
    //     if (!step) step = 1;
    //     start -= step;
    //     return function () {
    //         return start += step;
    //     }
    // }
    // var f2 = f1();
    // var f3 = f1(30, 6);
    // var f4 = f1(20, 2);
    // console.log(f2()); // 0
    // console.log(f2()); // 1
    // console.log(f3()); // 30
    // console.log(f3()); // 36
    // console.log(f4());
    // console.log(f4());


    // var greet = function (greetWord, a, b) {
    //     return greetWord + "! I am " + this.name + ' | ' + a + b;
    // }

    // var man = {
    //     name: 'Bob',
    //     greet: greet
    // }

    // var man2 = {
    //     name: 'Ivan',
    //     greet: greet
    // }

    // // console.log(man.greet('Hello'));
    // // console.log(man2.greet('Привет'));

    // var params1 = ['Привет', 6, 90];
    // var params2 = ['Hello', 8, 11];
    // console.log(man.greet.call(man2, 'Hello', 3, 4));
    // console.log(man2.greet.call(man, 'Привет', 5, 6));
    // console.log('___________');
    // console.log(man.greet.apply(man2, params1));
    // console.log(man2.greet.apply(man, params2));


}());