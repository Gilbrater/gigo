/*=====================================================
SERVICES
======================================================*/

$(function () {
    wow = new WOW().init();
});


/*=====================================================
WORKS
======================================================*/

$(function () {
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*=====================================================
TEAMS
======================================================*/

$(function () {
    $('#team-carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        dotsEach: true,
        autoplay: true
    });
});

/*=====================================================
TESTIMONIALS
======================================================*/

$(function () {
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        dotsEach: true,
        autoplay: true
    });
});

/*=====================================================
STATS
======================================================*/
$(function () {
    $('.counter').counterUp({
        delay:30,
        time:2000
    });
});

/*=====================================================
CLIENTS
======================================================*/
$(function () {
    $('#client-carousel').owlCarousel({
        loop: true,
        items: 6,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        dotsEach: true,
        autoplay: true
    });
});