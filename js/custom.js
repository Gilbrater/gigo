/*=====================================================
SERVICES
======================================================*/

$(function () {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();
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
