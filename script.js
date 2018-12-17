$(document).ready(function(){
	feather.replace();

	// intro slide ins
	var staggerIn = function(obj, index){
		setTimeout(function(){
			$(obj).animate({
	            left: '0px',
	        },1000);
		}, index*200);
	};

	var fadeIn= function(obj, index){
		setTimeout(function(){
			$(obj).animate({
				opacity: '1',
			}, 1000)
		}, index*200);
	}

	fadeIn("h1", 1);
	fadeIn("#myName", 5);

	fadeIn("#descrip", 12);
	staggerIn("#b1", 13);
	staggerIn("#b2", 14);
	staggerIn("#b3", 15);


	// smooth scrolling
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 600);
	    return false;
	});


	// toggle project descriptions
	$(".phead").click(function(){
		 $(this).next(".hide").fadeToggle('slow');
		 $(this).children(".closed").html($(this).children(".closed").html() == "+" ? "-" : "+");
	});
})