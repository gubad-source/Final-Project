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



    if ($('#third-section .tab-grid').length) {
        var $grid = $('#courses .courses').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
        });

        $('#tabs li').on('click', 'button', function () {
            
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }
});