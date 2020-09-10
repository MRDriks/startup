
$(document).ready(function() {
    $('.nav-burger').click( () => {
        $('.nav-burger, .nav-layout').toggleClass('active');
    });

    $('.nav-layout a').click( () => {
        $('.nav-layout, .nav-burger').removeClass('active');
    });
});