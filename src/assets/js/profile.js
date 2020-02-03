$('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1  }
    }
    
})

$('#owl-images').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})