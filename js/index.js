// equal height
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
    jQuery('.card-item .card-inner .card-content .para-content').equalHeight();

    // jQuery('.siksha-content .siksha-inner h3').equalHeight();
    // jQuery('.siksha-content .siksha-inner .para-content').equalHeight();


}

jQuery(document).ready(function () {

    equalHeight();

    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop()) {
            jQuery('.site-header').addClass('green')
        }
        else {
            jQuery('.site-header').removeClass('green')
        }
    });
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
                breakpoint: 576,
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
        slidesToScroll:1,
        dots:false,
        // prevArrow: '<button class="left-arrow slide-arrow"></button>',
        // nextArrow: '<button class="right-arrow slide-arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow:4,
                    slidesToScroll:1
                    
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows:false,
                    dots:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:2,
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