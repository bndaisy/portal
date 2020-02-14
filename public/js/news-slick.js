$('.slider__body').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider__body',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });