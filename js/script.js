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
    $("#btn-bars").on("click", function() {
        $("header").toggleClass("open-menu");
        $("#menu-mobile, #menu-mobile-mask").removeClass("hidden-menu");
    });
    $("#menu-mobile-mask, .btn-close").on("click", function() {
        $("header").removeClass("open-menu");
        $("#menu-mobile, #menu-mobile-mask").toggleClass("hidden-menu");
    });
    $("#telefone").mask("(99) 9 9999-9999").replace(/\D/g, '');


});