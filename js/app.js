$(document).ready(function() {
    // cards sliders for the meal section
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });    

    // dsiplay all breakfast menu on page load
    $(window).on('load', function() {
        let data_meal = $('.meal__filter--tab').attr("data-meal");
        $('.meal__container--item').each(function(index, value) {
            $(value).not('.'+data_meal).hide('400');
            $(value).filter('.'+data_meal).show('400');
        });

        setTimeout(function(){
            $('.preloader').fadeOut('2000');
        }, 2000);
    });

    // filter meal based on [breakfast, lunch, and dinner]
    $('.meal__filter--tab').on('click', function() {
        let data_meal = $(this).attr("data-meal");
        $('.meal__container--item').each(function(index, value) {
            $(value).not('.'+data_meal).hide();
            $(value).filter('.'+data_meal).show();
        });

        // $('.meal__fiter--tab p').removeClass('active_link');
        // $(this).addClass('active_link');
    });
});


// toggle mobile menu
let hamburgerMenu = document.querySelector('.nav__hamburger');
let menuItems = document.querySelector('.nav__list');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('toggleIcon');
    menuItems.classList.toggle('active');
})

// fixed navbar to top when scroll
