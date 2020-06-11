$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
       margin:20,
    stagePadding: 50,
        nav:true,
        loop:false,
        dots:true,
        
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        },
        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true

    })
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

