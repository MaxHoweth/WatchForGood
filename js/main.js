/* ===================================================================
 * Dazzle - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

	"use strict";

	var cfg = {
		scrollDuration : 800, // smoothscroll duration
		mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'  // mailchimp url
	},

	$WIN = $(window);

   // Add the User Agent to the <html>
   // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);


	/* Preloader
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

         // will fade out the whole preloader DIV that covers the website.
	      $("#preloader").delay(500).fadeOut('slow');

	  	});
	};


	/* Mobile Menu
	 * ---------------------------------------------------- */
	var ssMobileMenu = function() {

  		var toggleButton = $('.header-menu-toggle'),
          nav = $('#header-nav-wrap');

		toggleButton.on('click', function(event){
			event.preventDefault();

			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

		if (toggleButton.is(':visible')) nav.addClass('mobile');

		$(window).resize(function() {
			if (toggleButton.is(':visible')) nav.addClass('mobile');
			else nav.removeClass('mobile');
		});

		$('#header-nav-wrap').find('a').on("click", function() {

			if (nav.hasClass('mobile')) {
				toggleButton.toggleClass('is-clicked');
				nav.slideToggle();
			}
		});

	};

	/* CUSTOM COMPANY-INFO
	* ------------------------------------------------------ */

	document.getElementById("ourMissionButton").addEventListener("click", function(){
			document.getElementById("companyInfoContent").innerHTML = 'Our mission is to use the power of social media to leverage support for nonprofits by bringing innovative ideas to the table through the use of disruptive technology, partnerships with consumer brands while fostering socio-economic responsibility within our communities.';
			document.getElementById("ourMissionButton").style.background  ="#EC368D";
			document.getElementById("founderBioButton").style.background  ="Transparent";
			document.getElementById("aboutUsButton").style.background     ="Transparent";
	});

	document.getElementById("founderBioButton").addEventListener("click", function(){
			document.getElementById("companyInfoContent").innerHTML = 'Kevin has worked in a variety of disciplines throughout his life, but never found his drive until he focused on giving back. Kevin attributes his passion for charity to his faith and believes whatever your hands find to do, do it with your might! Kevin also understands that behind every good cause there is a melting pot of courageous individuals, dreamers, willing to devote their time and energy to a possibility and understanding. Big ideas tend to challenge the norms of our society and are usually far bigger than a single human effort, it requires citizen participation and the collective ability to color outside the lines of traditional thinking.';
			document.getElementById("ourMissionButton").style.background  ="Transparent";
			document.getElementById("founderBioButton").style.background  ="#EC368D";
			document.getElementById("aboutUsButton").style.background     ="Transparent";
	});

	document.getElementById("aboutUsButton").addEventListener("click", function(){
			document.getElementById("companyInfoContent").innerHTML = 'Watch for Good, is a charitable social network and marketplace. Our goal is to increase the corporate social responsibility footprint within the giving community through partnerships, fundraising, and advocacy. We offer a cause based platform that allows brands and nonprofits organizations to share their political, social, and environmental values with our audience through video. What we do is monetize the content and share a portion of the advertising revenue with the nonprofits every time a video is viewed. Our modern approach to fundraising uses digital advertising in the crowdfunding space by converting viewer impressions into donations. Our cashless method of fundraising allows our users to focus on the cause, leaving them feeling invested while supporting the brands in our marketplace. ';
			document.getElementById("ourMissionButton").style.background ="Transparent";
			document.getElementById("founderBioButton").style.background  ="Transparent";
			document.getElementById("aboutUsButton").style.background     ="#EC368D";
	});

	/* CUSTOM HOME VIDEO BACKGROUND AUTOPLAY
	* ------------------------------------------------------ */
	var video = document.getElementById("videobcg");
	video.muted = true;
	video.play();


	/* CUSTOM FAQ
	* ------------------------------------------------------ */
	//FAQ Button Switchboard Array
	var buttonStates = [false,false,false,false,false,false,false,false,false,false,false,false];

	//Link all .faqMainButton class members to the function listener
	document.querySelectorAll('.faqMainButton').forEach(item => {
		item.addEventListener('click', handleFaqButtonClick);
	})

	function handleFaqButtonClick(event) {
		const num = event.currentTarget.id.replace('faqButton','');

		if(buttonStates[num] == false) {
			document.getElementById("faqText" + num).style.display = "block";
			document.getElementById("faqSpan" + num).innerHTML = "-";
			buttonStates[num] = !buttonStates[num];
		}
		else {
			document.getElementById("faqText" + num).style.display ="none";
			document.getElementById("faqSpan" + num).innerHTML = "+";
			buttonStates[num] = !buttonStates[num];
		}


	}






	/* FitVids
	 * ---------------------------------------------------- */
	var ssFitVids = function() {
		$(".fluid-video-wrapper").fitVids();
	};



  /* Owl Carousel
	* ------------------------------------------------------ */
	var ssOwlCarousel = function() {

		$(".owl-carousel").owlCarousel({
	      loop: true,
  			nav: false,
				autoHeight: true,
  			items: 1,


				autoplay:true,
    		autoplayTimeout:7500,
				autoplaySpeed:1500,
		});


	};



  /* Highlight the current section in the navigation bar
	* ------------------------------------------------------ */
	var ssWaypoints = function() {

		var sections = $("section"),
		navigation_links = $(".header-main-nav li a");

		sections.waypoint( {

	       handler: function(direction) {

			   var active_section;

				active_section = $('section#' + this.element.id);

				if (direction === "up") active_section = active_section.prev();

				var active_link = $('.header-main-nav li a[href="#' + active_section.attr("id") + '"]');

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			},

			offset: '25%'

		});
	};


  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);

		 	e.preventDefault();
		 	e.stopPropagation();

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, cfg.scrollDuration, 'swing', function () {
				window.location.hash = target;
			});

	  	});

	};



  /* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	var ssPlaceholder = function() {
		$('input, textarea, select').placeholder();
	};



  	/* Alert Boxes
  	------------------------------------------------------- */
  	var ssAlertBoxes = function() {

  		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		});

  	};



  /* Animate On Scroll
  	* ------------------------------------------------------ */
	var ssAOS = function() {

		AOS.init( {
      	offset: 200,
      	duration: 600,
      	easing: 'ease-in-sine',
      	delay: 300,
			once: true,
			disable: 'mobile'
    	});

	};


  /* AjaxChimp
	* ------------------------------------------------------ */
	var ssAjaxChimp = function() {

		$('#mc-form').ajaxChimp({
			language: 'es',
		   url: cfg.mailChimpURL
		});

		// Mailchimp translation
		//
		//  Defaults:
		//	 'submit': 'Submitting...',
		//  0: 'We have sent you a confirmation email',
		//  1: 'Please enter a value',
		//  2: 'An email address must contain a single @',
		//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
		//  4: 'The username portion of the email address is invalid (the portion before the @: )',
		//  5: 'This email address looks fake or invalid. Please enter a real email address'

		$.ajaxChimp.translations.es = {
		  'submit': 'Submitting...',
		  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
		  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
		  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
		}

	};



  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};


   /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssPreloader();
		ssMobileMenu();
		ssFitVids();
		ssOwlCarousel();
		ssWaypoints();
		ssSmoothScroll();
		ssPlaceholder();
		ssAlertBoxes();
		ssAOS();
		ssBackToTop();

		// to use the mailchimp form, uncomment the
		// function call ssAjaxChimp() below:
		// ssAjaxChimp();

	})();


})(jQuery);
