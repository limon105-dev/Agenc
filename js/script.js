$(function () {
    'use strict';
    new WOW().init();

    $('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 500) {
            $('.back-to-top').fadeIn(500)
        } else {
            $('.back-to-top').fadeOut(500)
        }
        if (scrolling > 100) {
            $('.navbar').addClass('nav-fixed')
        } else {
            $('.navbar').removeClass('nav-fixed')
        }
    })

    $('#nav').onePageNav({
        currentClass: 'current',
    });

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    centerMode: true,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    centerMode: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    centerMode: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    });
})