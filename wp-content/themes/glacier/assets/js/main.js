/*
    Name: Glacier
    Description: Minimal WordPress Portfolio Theme
    Version: 1.0.8
    Author: MountainTheme

    TABLE OF CONTENTS
    ---------------------------
     1. Loading
     2. Mobile Menu
     3. Text animation
     4. Mini Cart
     5. Skillbars
     6. Counter
     7. LightCase
     8. Isotope
     9. Wow
     10. Parallax
     11. Flex Slider
     12. Header Sticky

*/

jQuery.noConflict()(function($) {

  'use strict'; 

   var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iPhone: function() {
        return navigator.userAgent.match(/iPhone/i);
      },
      iPad: function() {
        return navigator.userAgent.match(/iPad/i);
      },
      iPod: function() {
        return navigator.userAgent.match(/iPod/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    
/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

$(window).load(function() {

  $(document).ready(function() {
    
    mt_minimal_loading();
    mt_image_loading();
    mt_mobile_menu();
    mt_texteffect();
    mt_woo_minicart();
    mt_lightCase();
    mt_blogGrid();
    mt_wow();
    mt_parallax();
    mt_flexslider();
    mt_headerSticky();
    //Shortcodes
    mt_skillbars_shortcode();
    mt_counter_shortcode();

  });
});

function mt_minimal_loading() {
    $(".minimal-page-loader").fadeOut("slow");
} 

function mt_image_loading() {
    $(".loader-icon").delay(500).fadeOut();
    $(".image-page-loader").delay(700).fadeOut("slow");
} 

/* ================================= */
/* ::::::: 2. Mobile Menu :::::::::: */
/* ================================= */

function mt_mobile_menu() {

    $("#glacier_menu").slicknav({
        prependTo: 'header .col-md-12',
        allowParentLinks: true
      });
}     

/* ================================= */
/* :::::: 3. Text animation :::::::: */
/* ================================= */

function mt_texteffect() {

    $(function () {
        $('.info h2').textillate();
    });
 }

/* ================================= */
/* ::::::::: 4. Mini Cart :::::::::: */
/* ================================= */

function mt_woo_minicart() {

    $('.icon-cart').on('click', function(){
       $('.cart-widget').toggleClass('widget-visible');
    });

 }

/* ================================= */
/* ::::::::: 5. Skillbars :::::::::: */
/* ================================= */

function mt_skillbars_shortcode() {

    $('.skillbar').skillBars({
      from: 0,
      speed: 3000, 
      interval: 100,
      decimals: 0,
    });
 }

/* ================================= */
/* :::::::::: 6. Counter ::::::::::: */
/* ================================= */

function mt_counter_shortcode() {

    $('.timer .number').appear(function() {
        var counter = $(this).html();
        $(this).countTo({
            from: 0,
            to: counter,
            speed: 3000,
            refreshInterval: 70
        });
    });
 }

/* ================================= */
/* :::::::: 7. LightCase ::::::::::: */
/* ================================= */

function mt_lightCase() {

    // LightCase
    $('a.showcase').lightcase({
      transition: 'scrollVertical',
      speedIn: 400,
      speedOut: 300,
    });
 }

/* ================================= */
/* ::::::::: 8. Isotope :::::::::::: */
/* ================================= */

function mt_blogGrid() {

    // Blog Grid
    var element = $('.blogContainer');
    element.imagesLoaded().done(function() {
      element.isotope({
        itemSelector: 'article',
        masonry: {
          columnWidth: 'article',
          gutter: '.gutter-sizer'
        },
        percentPosition: true
      });
    });
    $(window).on('resize', function() {
      element.isotope();
    }).trigger('resize');
    
 }


/* ================================= */
/* :::::::::::: 9. Wow ::::::::::::: */
/* ================================= */

function mt_wow() {
    new WOW().init();
 }

/* ================================= */
/* :::::::: 10. Parallax ::::::::::: */
/* ================================= */

function mt_parallax() {
    $('.parallax').jarallax({
    speed: 0.5,
    noAndroid: true
    });
}


/* ================================= */
/* ::::::: 11. Flex Slider ::::::::: */
/* ================================= */

function mt_flexslider() {
  $('.flexslider').flexslider({
    controlNav: false,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    slideshowSpeed: '3000',
    pauseOnHover: true
  });
}


/* ================================= */
/* :::::: 12. Header Sticky :::::::: */
/* ================================= */

function mt_headerSticky() {
$("header.sticky").sticky({ topSpacing: 0, zIndex: "99999" });
}

});

