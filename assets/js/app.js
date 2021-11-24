// jQuery function
$(document).ready(function() {
    (function slickIntro() {
        if ($('.p-intro-slider').length) {
          $('.p-intro-slider').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
             /* responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplaySpeed: 2000,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                }
              ]*/
          })
        }
    }());
    (function slickIntro() {
      if ($('.p-partners-slider').length) {
        $('.p-partners-slider').slick({
          infinite: true,
          arrows: false,
          slidesToShow: 7,
          slidesToScroll: 7,
          dots: true,
           /* responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  autoplaySpeed: 2000,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              }
            ]*/
        })
      }
  }());
    $(".p-info-accordion-item__title").click(function(){
      $(this).toggleClass("open").next().slideToggle();
      $(".p-info-accordion-item__title").not(this).removeClass("open").next().slideUp();
  });
});