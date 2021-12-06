$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('#prevArrow'),
    nextArrow: $('#nextArrow'),
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});