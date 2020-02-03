

$(document).ready(function() {

    var owl = $('.owl-carousel');
	//	carousel for latest news
	$(".owl-carousel").owlCarousel({

		autoPlay: 1000, 		
        // navSpeed:500,
		center: true,
		loop: true,
		rewind: true,
		dots: true,
		nav: false,
		autoplay: true,
//		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		// navText: ['<img src="images/assets/left_arrow.svg" width="25%"/>','<img src="images/assets/right_arrow.svg" width="25%"/>'],
		// items: 1,
		// itemsDesktop: [1199, 2],
		// itemsDesktopSmall: [979, 2],
        // animateOut: 'animedat1',
        // animateIn: 'animedata',
		margin: 50,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 2,
				nav: true,
				mergeFit:true
			}
		}

	});

	// $('.owl-carousel').owlCarousel({
	// 	loop:true,
	// 	margin:10,
	// 	nav:true,
	// 	dots: true,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		600:{
	// 			items:3
	// 		},
	// 		1000:{
	// 			items:5
	// 		}
	// 	}
	// })


  
    // add animate.css class(es) to the elements to be animated
    // function setAnimation ( _elem, _InOut ) {
	// 	// Store all animationend event name in a string.
	// 	// cf animate.css documentation
	// 	var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	
	// 	_elem.each ( function () {
	// 	  var $elem = $(this);
	// 	  var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
	
	// 	  $elem.addClass($animationType).one(animationEndEvent, function () {
	// 		$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
	// 	  });
	// 	});
	//   }
	
	// // Fired before current slide change
	//   owl.on('change.owl.carousel', function(event) {
	// 	  var $currentItem = $('.owl-item', owl).eq(event.item.index);
	// 	  var $elemsToanim = $currentItem.find("[data-animation-out]");
	// 	  setAnimation ($elemsToanim, 'out');
	//   });
	
	// // Fired after current slide has been changed
	//   var round = 0;
	//   owl.on('changed.owl.carousel', function(event) {
	
	// 	  var $currentItem = $('.owl-item', owl).eq(event.item.index);
	// 	  var $elemsToanim = $currentItem.find("[data-animation-in]");
		
	// 	  setAnimation ($elemsToanim, 'in');
	//   })
	  
	//   owl.on('translated.owl.carousel', function(event) {
	//   //   console.log (event.item.index, event.page.count);
		
	// 	  if (event.item.index == (event.page.count - 1))  {
	// 		if (round < 1) {
	// 		  round++
	// 		  // console.log (round);
	// 		} else {
	// 		  owl.trigger('play.owl.autoplay');
	// 		  var owlData = owl.data('owl.carousel');
	// 		  owlData.settings.autoplay = false; //don't know if both are necessary
	// 		  owlData.options.autoplay = false;
	// 		  // owl.trigger('refreshed.owl.carousel');
	// 		  owl.trigger('resize.owl.carousel');
	// 		  owl.trigger('play.owl.autoplay');
	// 		}
	// 	  }
	//   });

	
});




// water ripples

// $(document).ready(function(){
// 	$('.section').ripples(({
// 		dropRadius: 12,
// 		resolution: 256,
// 		perturbance: 0.04
// 	}));
// });





// scroll-animation for navbar

// window.sr = ScrollReveal();
// sr.reveal('home .home-heading1', {
// 	duration: 2000,
// 	origin: 'left',
// 	distance: '110px',
// 	opacity: 0.3,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	// rotate: { x: 0, y: 10, z: 0 },
// });

// sr.reveal('.home-heading1', {
// 	duration: 2000,
// 	origin: 'right',
// 	distance: '100px',
// 	delay: 10,
// 	opacity: 0,
// });
// sr.reveal('.home button', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '120px',
// 	delay: 0,
// 	opacity: 0.1,
// 	// easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });

// sr.reveal('.timings', {
// 	duration: 1500,
// 	origin: 'bottom',
// 	distance: '100px',
// 	viewFactor: 0.01,
// 	delay: 0,
// 	opacity: 0.6,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });

// sr.reveal('.book-form', {
// 	duration: 1800,
// 	origin: 'bottom',
// 	distance: '100px',
// 	viewFactor: 0.01,
// 	delay: 80,
// 	opacity: 0.6,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clinic-left', {
// 	duration: 2000,
// 	origin: 'left',
// 	distance: '210px',
// 	viewFactor: 0.1,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clinic-img', {
// 	duration: 2000,
// 	origin: 'right',
// 	distance: '210px',
// 	viewFactor: 0.1,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clinic-right h1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '20px',
// 	viewFactor: 0.14,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clinic-right hr', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '30px',
// 	viewFactor: 0.14,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clinic-right p', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.14,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.service-heading h1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '30px',
// 	viewFactor: 0.2,
// 	delay: 10,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.service-heading hr', {
// 	duration: 2500,
// 	origin: 'bottom',
// 	distance: '20px',
// 	viewFactor: 0.2,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.service-heading p', {
// 	duration: 3000,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.2,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.svr1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.25,
// 	delay: 0,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.svr2', {
// 	duration: 2100,
// 	origin: 'bottom',
// 	distance: '80px',
// 	viewFactor: 0.25,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.svr3', {
// 	duration: 2200,
// 	origin: 'bottom',
// 	distance: '120px',
// 	viewFactor: 0.25,
// 	delay: 200,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.svr4', {
// 	duration: 2300,
// 	origin: 'bottom',
// 	distance: '160px',
// 	viewFactor: 0.25,
// 	delay: 300,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });

// sr.reveal('.clients-heading h1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '30px',
// 	viewFactor: 0.3,
// 	delay: 10,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clients-heading p', {
// 	duration: 2300,
// 	origin: 'bottom',
// 	distance: '20px',
// 	viewFactor: 0.3,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.clients-heading button', {
// 	duration: 2500,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.3,
// 	delay: 200,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });

// sr.reveal('.choose-left h1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '30px',
// 	viewFactor: 0.33,
// 	delay: 10,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.choose-right h5', {
// 	duration: 3000,
// 	origin: 'bottom',
// 	distance: '20px',
// 	viewFactor: 0.33,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.choose-right p', {
// 	duration: 3000,
// 	origin: 'right',
// 	distance: '20px',
// 	viewFactor: 0.33,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });


// sr.reveal('.team-heading h1', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '30px',
// 	viewFactor: 0.38,
// 	delay: 10,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.team-heading hr', {
// 	duration: 2500,
// 	origin: 'bottom',
// 	distance: '20px',
// 	viewFactor: 0.38,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
// sr.reveal('.team-heading p', {
// 	duration: 3000,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.38,
// 	delay: 100,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });