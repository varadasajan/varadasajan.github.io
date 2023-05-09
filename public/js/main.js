(function($){
	'use strict';

/* --------------------------------------------------
	Initialization
-------------------------------------------------- */

    // Initialize all functions when the document is ready.
	$(document).ready(function(){

		initNavbar();
		initScroller(); 
		initAnimation();
		initVideoBg();  

		if ( document.getElementById('shop-slider-range') ) {
			initRangeSlider();
		}

		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260) {
			initParallax();

			$(window).stellar({
				hideDistantElements: false
			});
		}
		
	
	
		
	});

	// Initialize functions after elements are loaded.
	$(window).load(function() {

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function() {

		});
	$('#htmlChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#htmlChart').data('easyPieChart').update(0); 
						$('#htmlChart').data('easyPieChart').update($('#htmlChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
		$('#cssChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#cssChart').data('easyPieChart').update(0); 
						$('#cssChart').data('easyPieChart').update($('#cssChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
		
		$('#angularChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#angularChart').data('easyPieChart').update(0); 
						$('#angularChart').data('easyPieChart').update($('#angularChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
		$('#bootstrapChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#bootstrapChart').data('easyPieChart').update(0); 
						$('#bootstrapChart').data('easyPieChart').update($('#bootstrapChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
		$('#reactChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#reactChart').data('easyPieChart').update(0); 
						$('#reactChart').data('easyPieChart').update($('#reactChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
			$('#photoChart').easyPieChart({
            //your options goes here
			animate:2000,
			barColor:'#1bb4ee',
			lineWidth:'10',
			size:'160',
			onStop: function(){
				var timer = setInterval(function(){
					if($('#counters-min div').hasClass('animated')){
						$('#photoChart').data('easyPieChart').update(0); 
						$('#photoChart').data('easyPieChart').update($('#photoChart').attr('data-percent'));  
						clearInterval(timer);
					}
					
				},1000)
			}
        });
		initPortfolio();
		initBlogMasonry();

	});


/* --------------------------------------------------
	Navigation | Navbar
-------------------------------------------------- */
	
	function initNavbar(){

		// Sticky Nav & Transparent Background
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > 20) {
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-trans-dark');
				$('nav').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

		});


		// Nav on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('nav').addClass('mobile-nav');		        
		    } else {
		    	$('nav').removeClass('mobile-nav');
		    }

    		if ($('nav').hasClass('mobile-nav')) {
    			$('nav').removeClass('navbar-trans');
    			$('nav').removeClass('navbar-trans-dark');
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('nav').addClass('navbar-trans');
    			}
    		}

    		// Remove dropdown open on hover for small screens
    		if ($('nav').hasClass('mobile-nav')) {

    			$('.dropdown-toggle').on('mouseover', function(e){    
    			        e.preventDefault();

    			        $('.dropdown').removeClass('open');

    			    e.stopPropagation();
    			});
    		}

    		// Close mobile menu when clicked link
    		// var isNotDropdown = $('nav:not(.mobile-nav)');

    		if (!$('.nav a').hasClass('dropdown-toggle')) {

    			$('.nav a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		// Bugfix for iOS not scrolling on open menu
	    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });


	} // initNavbar



/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {

		$('#navbar').localScroll({
			easing: 'easeInOutExpo'
		});

		$('#page-top').localScroll({
			easing: 'easeInOutExpo'
		});	
	} // initScroller




/* --------------------------------------------------
	Parallax
-------------------------------------------------- */

	
	function initParallax () {

		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

		if (!isSafari) {
			$(".main-op").parallax("50%", 0.2);
			$(".number-counters").parallax("50%", 0.2);
			$(".cirlce-counters").parallax("50%", 0.3);
			$(".client-list-parallax").parallax("50%", 0.4);
			$(".ft-slider-parallax").parallax("50%", 0.4);
			$(".testimonials-parallaxx").parallax("50%", 0.4);
			$(".twitter-slider").parallax("50%", 0.4);
			$(".login-2").parallax("50%", 0.2);
		}		
	}





 
/* --------------------------------------------------
	Portfolio
-------------------------------------------------- */
	
	function initPortfolio () {

		// Filters
		$('.portfolio-filters a').click(function (e) {
			  e.preventDefault();

			  $('li').removeClass('active');
			  $(this).parent().addClass('active');
		});

		
		// Full Width Gallery (3 columns)
		function pfolio3colFW () {
			
			var $container = $('#pfolio');
			// init
			$container.isotope({
				// options
				itemSelector: '.portfolio-item',
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		} // fwNogap3col


		function pfolioMasonry () {
			
			var $container = $('.pfolio-items');
			// init
			$container.isotope({
				// options
				itemSelector: '.p-item',
			    percentPosition: true,
			    layoutMode: 'packery',
			    masonry: {
			      columnWidth: '.grid-sizer'
			    }				
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		}


		pfolio3colFW();
		pfolioMasonry();

	} // initPortfolio


 

/* --------------------------------------------------
	Blog Masonry Layout
-------------------------------------------------- */

	function initBlogMasonry () {

		var $container = $('.blog-container');
			// init
			$container.isotope({
				// options
				itemSelector: '.blog-selector',
				percentPosition: true
			});
	}
	



/* --------------------------------------------------
  Contact Pages
-------------------------------------------------- */

	$('.show-map').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $(this).toggleClass('info-open');
	});



/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		
		new WOW().init();

	}




/* --------------------------------------------------
	Video Background
-------------------------------------------------- */

	function initVideoBg () {

		var hasBgVideo = $('#fs-video-one-bg').hasClass('player');
		var hasFwBgVideo = $('#fw-video-one-bg').hasClass('player');
		var hasSecBgVideo = $('#section-video').hasClass('player');

		if (hasBgVideo || hasFwBgVideo || hasSecBgVideo) {

			$('.player').YTPlayer();

		}
		

	}



 


	



})(jQuery);



/* --------------------------------------------------
	Contact Form JS Validation & AJAX call 
-------------------------------------------------- */
$(function() {

//	Regular Expressions
var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
var	expLettersOnly = /^[A-Za-z ]+$/;

//	Checks if a field has the correct length
function validateLength ( fieldValue, minLength ) {
	return ( $.trim( fieldValue ).length > minLength );
}

//	Validate form on typing
$( '.form-ajax' ).on( 'keyup', 'input.validate-locally', function() {
	validateField( $(this) );
});

//	AJAX call
$( '.form-ajax' ).submit(function(e) {
	e.preventDefault();
	var $this = $( this ),
			action = $this.attr( 'action' );

	// The AJAX requrest
	$.post(
			action,
			$this.serialize(),
			function( data ) {
				$( '.ajax-message' ).html( data );
			}
	);
});

//	Validates the fileds
function validateField ( field ) {
	var errorText = "",
			error = false,
			value = field.val(),
			siblings = field.siblings( ".alert-error" );

	// Test the name field
	if ( field.attr("name") === "name" ) {
		if ( !validateLength( value, 2 ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> The name is too short!<br>';
					$('input[name="name"]').addClass('input-error');
		} else {
			$('input[name="name"]').removeClass('input-error');
		}

		if ( !expLettersOnly.test( value ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> The name can contain only letters and spaces!<br>';
					$('input[name="name"]').addClass('input-error-2');
		} else {
			$('input[name="name"]').removeClass('input-error-2');
		}
	}

	// Test the email field
	if ( field.attr("name") === "email" ) {
		if ( !expEmail.test( value ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> Enter correct email address!<br>';
					$('input[name="email"]').addClass('input-error');
		} else {
			$('input[name="email"]').removeClass('input-error');
		}
	}

	// Display the errors
	siblings.html( errorText );

	}

});

/*
$(window).load(function() {
  doughnutWidget.options = {
    container: $('#htmlChart'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 80
  };

  doughnutWidget.render(data());
  
  doughnutWidget.options = {
    container: $('#cssChart'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 80
  };

  doughnutWidget.render(data());
});

function data() {
    var data = {
    HTML5: {
      val: 85,
      color: '#57B4F2',
      click: function(e) { 
      }
    },
	 CSS3: {
      val: 85,
      color: '#57B4F2',
      click: function(e) { 
      }
    },
  };

  return data;
}*/