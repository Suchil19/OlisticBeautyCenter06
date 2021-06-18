// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });
  

/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely.
    // Transition effect for navbar
    $(window).scroll(function() { //function is called while you scrolls
      // checks if window is scrolled more than 300px, adds/removes solid class
      if($(this).scrollTop() > 19) {
          $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
      } else {
          $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
      }
    });
});

/*========== ADD NAV BACKGROUND ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$('#hamburguer').click(function() {
if($(window).scrollTop() === 0){
  $('.navbar').toggleClass('solid');
}
});
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$(document).click(function (event) { //click anywhere
    var clickover = $(event.target); //get the target element where you clicked
    var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
    if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
        $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
    }
});
});

/*====== CAROUSEL owl =======
$(document).ready(function () {

  "use strict";
  $('#list-team').owlCarousel({
      loop: true,
      center: false,
      items:4 ,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 4
        }
      }
  });
});*/


$(document).ready(function () {
$('#properties-slider').slick({
  slidesToShow: 3,
  /*Agregue el autoplay*/
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></a>',
  nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></a>',
  responsive: [
      {
          breakpoint: 1100,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
          }
      },
      {
          breakpoint: 530,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
          }
      }
  ]
})});
