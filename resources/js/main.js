$(document).ready(function(){
    // Univarsity slider
    $('.our_univarsity').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    // Event Slider 
    $('.event_cards').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay: true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    // Featured Slider
    $('.oru_featured').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1140:{
                items:3
            }
        }
    })
    // Testimonial Slider
    $('.our_clients').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        autoplay: true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2.4
            }
        }
    })
    // Mobile Menu
    $('.main_nav').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 1024,
    });
  });