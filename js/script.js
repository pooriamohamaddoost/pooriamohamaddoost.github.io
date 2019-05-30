$(window).on("load", function() {

	$(".loader .inner").fadeOut(800, function() {
		$(".loader").fadeOut(850);
	});
})


$(document).ready(function() {
	
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});


	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Student."],
		typeSpeed: 80,
		loop: true,
		startDelay: 1500,
		showCursor: false
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },

	        938:{
	            items:4
	        }
	    }
	})





	 var skillsTopOffset = $(".skillsSection").offset().top;

	 $(window).scroll(function() {
	 	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
		 	$('.chart').easyPieChart({
	            easing: 'easeInOut',
	            barColor: '#fff',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
	            }
	        });
	 	}
	 });





	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > statsTopOffset - $(window).height() + 200) {


			$('.squareContent').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }


  });  

});

		}

	 });	





	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 35 }, "slow");

	});




	var nav = $("#navigation");
	var navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}
    


              
});

