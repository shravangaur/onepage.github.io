$('.heroslider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    autoplay:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }

});

$('.offer-cupon').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 40,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }

});

$('.client-panel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 40,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    }
})

$(document).ready(function(){
    $(".faqbutton").click(function(){
        
    });
});