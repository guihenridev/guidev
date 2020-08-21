$(window).scroll(function(event) {

    var yOffset = window.pageYOffset;
    var breakpoint = 80;
    if (yOffset > breakpoint) {
        $("#menu").addClass('active');
    } else {
        $("#menu").removeClass('active');
    }

});