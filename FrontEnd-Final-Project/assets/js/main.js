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



///loader have been added
 $(window).on('load', function () {
    $(".loader").addClass("d-none")
});



});
////slide with eye-icon have been added 
$(".services-content .topic .title").click(function(){
    $(this).children().eq(1).toggleClass("fas fa-2x fa-eye-slash mt-2").toggleClass("fas fa-2x fa-eye mt-2")
   $(this).next() .slideToggle()})

   $(".search").click(function(){
       $(".search-drop").slideToggle("slow")
   })
   ///Sidebar have been added last night
// $(".hamburger").click(function(){
    
//     $(".sidebar.d-none").removeClass("d-none")
// })
// $(".close").click(function(){
//     $(".sidebar").addClass("d-none")
// })

function openNav(){
    document.querySelector(".sidebar").style.width="436px"
}
function closeNav(){
    document.querySelector(".sidebar").style.width="0"
}