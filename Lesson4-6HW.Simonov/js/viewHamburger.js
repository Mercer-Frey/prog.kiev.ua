
var size_b = Hamburger.SIZE_SMALL;
var stuff = Hamburger.STUFFING_CHEESE;
var hamburger = new Hamburger(size_b, stuff);
var burger = document.getElementById("burger");
var burgerSize = document.getElementById("burgerSize");
var mayo = document.getElementById("mayo");
var spice = document.getElementById("spice");
var price = document.querySelector(".price");
var col = document.querySelector(".col");

col.innerHTML = 0;
price.innerHTML = 0;

function checkBox(box) {
  var chbox = document.getElementById(box.id);

   if (chbox.checked) {

      if (box.value=='Small'){
      size_b = Hamburger.SIZE_SMALL; 
      burgerSize.style.width = "30%";

    } else {
        size_b = Hamburger.SIZE_LARGE; 
        burgerSize.style.width = "50%";
      }
    }
  col.innerHTML = hamburger.calculatePrice();
  price.innerHTML = hamburger.calculateCalories();
}



function checkBox2(box2) {
  var chbox1 = document.getElementById(box2.id);
    if (chbox1.checked) {

      if (box2.value=='Cheese'){
        stuff = Hamburger.STUFFING_CHEESE; 
        burger.style.background = "url(img/cheese.png)";
        burger.style.backgroundRepeat = "no-repeat";
        burger.style.backgroundPosition = "center center";
        burger.style.backgroundSize = "90% auto";

      } else if (box2.value=='Salad'){
        stuff = Hamburger.STUFFING_SALAD;
        burger.style.background = "url(img/salad.png)";
        burger.style.backgroundRepeat = "no-repeat";
        burger.style.backgroundPosition = "center center";
        burger.style.backgroundSize = "90% auto";

      } else {
        stuff = Hamburger.STUFFING_POTATO;
        burger.style.background = "url(img/potato.png)";
        burger.style.backgroundRepeat = "no-repeat";
        burger.style.backgroundPosition = "center center";
        burger.style.backgroundSize = "90% auto";
      }
    }
  col.innerHTML = hamburger.calculatePrice();
  price.innerHTML = hamburger.calculateCalories();
}



function checkBox3(box3) {
  var chbox2 = document.getElementById(box3.id);

  if (chbox2.checked) {

    if (box3.value =='Mayonez'){
      hamburger.addTopping(Hamburger.TOPPING_MAYO);
      mayo.style.background = "url(img/mayo.png)";
      mayo.style.backgroundRepeat = "no-repeat";
      mayo.style.backgroundPosition = "center center";
      mayo.style.backgroundSize = "50% auto";

    } else {
      hamburger.addTopping(Hamburger.TOPPING_SPICE);
      spice.style.background = "url(img/spice.png)";
      spice.style.backgroundRepeat = "no-repeat";
      spice.style.backgroundPosition = "center center";
      spice.style.backgroundSize = "50% auto";

    }

  } else {

      if (box3.value =='Mayonez'){
        hamburger.removeTopping(Hamburger.TOPPING_MAYO);
        mayo.style.background = "url()";
        mayo.style.backgroundRepeat = "no-repeat";
        mayo.style.backgroundPosition = "center center";
        mayo.style.backgroundSize = "50% auto";


      } else {
        hamburger.removeTopping(Hamburger.TOPPING_SPICE);
        spice.style.background = "url()";
        spice.style.backgroundRepeat = "no-repeat";
        spice.style.backgroundPosition = "center center";
        spice.style.backgroundSize = "50% auto";

      }
  }
  col.innerHTML = hamburger.calculatePrice();
  price.innerHTML = hamburger.calculateCalories();
}


