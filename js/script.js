$(document).ready(function() {
    $(window).scroll(function(event) {

        var yOffset = window.pageYOffset;
        var breakpoint = 80;
        if (yOffset > breakpoint) {
            $("#menu").addClass('active');
        } else {
            $("#menu").removeClass('active');
        }

    });
    $("#telefone").mask("(99) 9 9999-9999").replace(/\D/g, '');
    
});