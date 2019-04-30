(function ($) {

    'use strict';
    let fullpage_init = () => {
        $('#fullpage').fullpage({
            //options here
            navigation: true,
            licenseKey: 'YOUR_KEY_HERE',
            recordHistory: true,
            autoScrolling: true,
            navigationPosition: 'right',
            slidesNavigation: true,
            slidesNavPosition: 'top',
            verticalCentered: true,

            onLeave: function (origin, destination, direction) {
                if (origin.index == 0 && direction == 'down') {
                    $('#fp-nav').delay(400).fadeIn(500);
                    $('#arrowDown').fadeOut(200);
                    jQuery("#mainLogo span").animate({color: "#000000"}, 600);
                    jQuery("#about a").animate({color: "#000000"}, 600);
                    jQuery("#social i").animate({color: "#000000"}, 600);
                } else if (destination.index == 0 && direction == 'up') {
                    $('#fp-nav').fadeOut(200);
                    $('#arrowDown').delay(400).fadeIn(500);
                    jQuery("#mainLogo span").animate({color: "#ffffff"}, 600);
                    jQuery("#about a").animate({color: "#ffffff"}, 600);
                    jQuery("#social i").animate({color: "#ffffff"}, 600);
                }
            }
        });
    };

    $(document).ready(function () {

        fullpage_init();

        $('#arrowDown').click(function(){
            $.fn.fullpage.moveSectionDown();
        });
        $('#mainLogo').click(function () {
            $.fn.fullpage.moveTo(1);
        });

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                    $.fn.fullpage.destroy('all');
                    fullpage_init();
                }
            },
        }).data('smoothState');
    });

}(jQuery));