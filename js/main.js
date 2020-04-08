$(document).ready(function() {
    $('.nav-burger').click(function(e) {
        $('.nav-burger, .nav-layout').toggleClass('active');
    });

    $('.nav-layout a').click(function(e) {
        $('.nav-layout, .nav-burger').removeClass('active');
    });
});