(function($) {
    "use strict"
    jQuery(document).ready(function() {
    /* start point */
    // mobile menu
    // $('#main-menu').meanmenu({
    //     meanMenuContainer: '.mobile-menu',
    //     meanScreenWidth: "991.99",
    //     onePage: true
    // });
    // $('select').niceSelect();

    // $('#nav-icon1').click(function(){
    //   $(this).toggleClass('open');
    // });


    // sidebar activation

    
      // $(document).keyup(function(e) {
      //   if (e.keyCode === 27) {
      //     toggleSidebar();
      //   }
      

    // Scroll To Top 
    // $('.scrollup').on('click', function() {
    //     $("html").animate({
    //         "scrollTop": '0'
    //     }, 500);
    // });
    // $(window).on('scroll', function() {
    //     var toTopVisible = $('html').scrollTop();
    //     if (toTopVisible > 500) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });

    // counterUp
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });


      // sidebar nav opener
    $('#nav-icon2').click(function(){
      $(this).toggleClass('open');
      $("#lms-sidebar").toggleClass('open');
    });

    // categories sidebar sublist
    $('.lms-categories .has-sublist').click(function(){
      $(this).find(".sub-menu").toggleClass('active');
      $(this).toggleClass('changed');
    });


    // vdo popup activation
    $('.popup-link').magnificPopup({
        type: 'iframe',
        // other options
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
        
            patterns: {
            youtube: {
                index: 'youtube.com/', 
        
                id: 'v=', 
        
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
            },
            vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
            }
        
            },
        
            srcAction: 'iframe_src',
        }
        });


    // course slider active
    $('.course-slider-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        fade: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
  
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      
    // MouseHover Animation home 2 hero section
    var hoverLayer = $(".hero-section2");
    var heroImgOne = $(".hero2-shape");
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgOne.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      
      });
    });



    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    });

    /* end point */
    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
