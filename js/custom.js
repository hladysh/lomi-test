$(function(){	
	$('.menu-item:first-child').addClass('active');
	$("#nav-toggle").click(function() {
		$(this).toggleClass("active");
		$('.menu-item').toggleClass("visible");
	});
	$('.menu-item').click(function(){
		$('.menu-item , #nav-toggle').removeClass('active');
		$(".menu-item").removeClass('visible');
		$(this).addClass('active');
	})
});






