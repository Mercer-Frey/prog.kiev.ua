
function checkBox(box) {
    var chbox;
    chbox = document.getElementById(box.id);
    if (chbox.checked) {
       if (box.value=='small'){size_b = Hamburger.SIZE_SMALL; burger.style.backgroundSize = "";}
       else {size_b = Hamburger.SIZE_LARGE; burger.style.backgroundSize = "110%";}
       hamburger = new Hamburger(size_b);

    }
}

function checkBox2(box2) {
    var chbox1;
    chbox1 = document.getElementById(box2.id);
    if (chbox1.checked) {
       if (box2.value=='Cheese'){stuff = Hamburger.STUFFING_CHEESE; burger.style.background = "url(img/cheese.png) no-repeat";}
       else if (box2.value=='Salad'){stuff = Hamburger.STUFFING_SALAD; burger.style.background = "url(img/salad.png) no-repeat";}
       else {stuff = Hamburger.STUFFING_POTATO; burger.style.background = "url(img/potato.png) no-repeat";}
       hamburger = new Hamburger(size_b, stuff);

       console.log(hamburger.getToppings());
       console.log(hamburger.getSize());
       console.log(hamburger.getStuffing());
       console.log(hamburger.calculatePrice());


    }
}
function checkBox3(box3) {
    var chbox2;
    chbox2 = document.getElementById(box3.id);
    if (chbox2.checked) {
       if (box3.value =='mayo'){hamburger.addTopping(Hamburger.TOPPING_MAYO); mayo.style.background = "url(mayo.png) no-repeat";}
       else {hamburger.addTopping(Hamburger.TOPPING_SPICE); spice.style.background = "url(spice.png) no-repeat";}  
    } else {
        if (box3.value =='mayo'){hamburger.removeTopping(Hamburger.TOPPING_MAYO); mayo.style.background = "url() no-repeat";}
        else {hamburger.removeTopping(Hamburger.TOPPING_SPICE); spice.style.background = "url() no-repeat";}
    }
    console.log(hamburger.getToppings());
       console.log(hamburger.getSize());
       console.log(hamburger.getStuffing());
       console.log(hamburger.calculatePrice());

    
}
