(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        preLoader();
    });

	/* Preloader init */
	function preLoader(){
		let count = 0;
		let preloaderCounter = setInterval(function(){
			$(".preloader__counter").html(`${count}%`);
			$(".preloader__progressbar__progress").css("width", count+"%");
			if(count == 100){
				clearInterval(preloaderCounter);
				setTimeout(()=>{
					$(".preloader").addClass("hide");
					$("body").removeClass("overflow-hidden");
				},500)
				$(".preloader__content").addClass("hide");
				$(".preloader").delay(1200).fadeOut();
			}
			count++
		},20)
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').outerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('#banner').outerHeight()/2) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* AOS init */
	(function(){
		AOS.init({
			easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
			duration: 800,
			offset: 60,
		});
	})()


})(jQuery);