$(function() {

	$(".wrap--menu").click(function() {
		$(".toggle-mnu").toggleClass("on");
		$(".toggle-mnu").toggleClass("black-mnu");
		$(".logo_hover").toggleClass("logo--click--none");
		$(".open--menu").toggleClass("logo--click--none");
		$(".full--wrapper--hidden--menu").slideToggle();
	});
    
});


$(document).ready(function() {
    
});

$(document).ready(function() {
	$('#fullpage').fullpage();
});