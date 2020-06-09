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


$(".hamburger").click(function(){
    $(".sidebar").removeClass("d-none")
})
$(".close").click(function(){
    $(".sidebar").addClass("d-none")
})
    

    
});

