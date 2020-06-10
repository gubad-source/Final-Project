$(document).ready(function () {
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


    $(window).on('load', function () {
        wowAnimation();
    });

///Sidebar have been added last night
$(".hamburger").click(function(){
    $(".sidebar.d-none").removeClass("d-none")
})
$(".close").click(function(){
    $(".sidebar").addClass("d-none")
})

///loader have been added
 $(window).on('load', function () {
    $(".loader").addClass("d-none")
});


    
});

