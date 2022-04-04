// equal height
jQuery(document).ready(function () {

    equalHeight();
    windowScroll();

    jQuery('.hamburger').click(function () {
        jQuery('html, body').toggleClass('open-menu')
        jQuery('.hamburger').toggleClass('open-menu')
        jQuery('.site-nav').toggleClass('open-menu')
    });

    jQuery(".slider-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="left-arrow slide-arrow"></button>',
        nextArrow: '<button class="right-arrow slide-arrow"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    jQuery(".client-say-slider-main").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="left-arrow slide-arrow"></button>',
        nextArrow: '<button class="right-arrow slide-arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots:true,
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots:true,
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots:true,
                }
            },
        ]
    });

    jQuery(".news-slider-main").slick({
        slidesToShow:4,
        slidesToScroll:4,
        dots:false,
        prevArrow: '<button class="left-arrow slide-arrow"></button>',
        nextArrow: '<button class="right-arrow slide-arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow:4,
                    slidesToScroll:4,
                    dots:true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows:false,
                    dots:true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    dots:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    arrows: false,
                    dots:true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false,
                    dots:true,
                }
            },
        ]

    });

    jQuery('#disposal').change(function(){
        jQuery('.tab-main').hide();
        jQuery('#tab-1').show();
        dropdown = jQuery('#disposal').val();
        jQuery('.tab-main').hide();
        jQuery('#' + 'tab-' + dropdown).show()
    });
});

jQuery(window).resize(function() {
    equalHeight();
});

function windowScroll(){
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop()) {
            jQuery('.site-header').addClass('green')
        }
        else {
            jQuery('.site-header').removeClass('green')
        }
    });
}

function equalHeight() {
    jQuery.fn.extend({
        equalHeight: function() {
            var top = 0;
            var row = [];
            var classname = ('equalHeight' + Math.random()).replace('.', '');
            jQuery(this).each(function() {
                var thistop = jQuery(this).offset().top;
                if (thistop > top) {
                    jQuery('.' + classname).removeClass(classname);
                    top = thistop;
                }
                jQuery(this).addClass(classname);
                jQuery(this).height('auto');
                var h = (Math.max.apply(null, jQuery('.' + classname).map(function() {
                    return jQuery(this).outerHeight();
                }).get()));
                jQuery('.' + classname).height(h);
            }).removeClass(classname);
        }
    });
    jQuery('.card-item .card-inner .card-content h3').equalHeight();
    jQuery('.card-item .card-inner .card-content .para-content p').equalHeight();

    jQuery('.research-item .research-inner .research-content h3').equalHeight();
    jQuery('.research-item .research-inner .research-content .para-content p').equalHeight();   

    // jQuery('.client-say-slider-item .client-say-slider-inner').equalHeight();
    // jQuery('.client-say-slider-item .client-say-slider-inner .client-say-content').equalHeight();

    // jQuery('.siksha-content .siksha-inner h3').equalHeight();
    // jQuery('.siksha-content .siksha-inner .para-content').equalHeight();
}