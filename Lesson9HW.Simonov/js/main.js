// $('.btn').click(function () {
//     // $('.box').toggle(400);
//     // $('.box').fadeToggle('fast');
//     // $('.box').slideToggle();
// })


// $('.box').click(function () {
//     // $(this).find('.box2').toggle();
//     // $(this).find('.box2').css('background-color', 'green');
//     // $(this).find('.box2').toggleClass('box2--accent');
// })

var images = ['1.jpg', '2.jpg', '3.jpg'];
var currentImage = 1;

// for (var i = 0; i < images.length; i++) {
//     $('.slider__controls').append('<div data-img="' + i + '" class="slider__control">');
// }

$.each(images, function (i) {
    $('.slider__controls').append('<div data-img="' + i + '" class="slider__control">');
});

function setCurrentSlide() {
    $('.slider__container').css('background-image', 'url("./img/' + images[currentImage] + '")')
    $('.slider__control').removeClass('slider__control--isActive');
    $('.slider__control[data-img=' + currentImage + ']').addClass('slider__control--isActive');
}
setCurrentSlide()



$('.slider__control').click(function () {
    currentImage = $(this).attr('data-img');
    setCurrentSlide();
})


    function navigation(){
        $('.slider__navigation').append('<div class="prev"><i class="fal fa-arrow-circle-left"></i></div>');
        $('.slider__navigation').append('<div class="next"><i class="fal fa-arrow-circle-right"></i></div>');
        $('.prev').click(function () {
            currentImage--;
            if (currentImage < 0) {
            currentImage = images.length - 1;
            }
        setCurrentSlide();
        });
        
        $('.next').click(function () {
        currentImage++;
            if (currentImage > images.length - 1) {
            currentImage = 0;
            }
        setCurrentSlide();
        });
    };

navigation();

// $('.accordion__control').click(function () {
//     // var data = $(this).next();
//     // if (data.is(':visible')) {
//     //     data.slideUp();
//     // } else {
//     //     $('.accordion__data').slideUp();
//     //     data.slideDown();
//     // }

//     var data = $(this).next();
//     if (data.hasClass('accordion__data--isVisible')) {
//         data.removeClass('accordion__data--isVisible');
//     } else {
//         $('.accordion__data').removeClass('accordion__data--isVisible');
//         data.addClass('accordion__data--isVisible');
//     }
// })