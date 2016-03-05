$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})//Ryu gets ready on mouseover
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})//ryu relaxes on mouseleave
	.mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//play sound
		//show throw
	})//fire hadouken
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})//return to ready position
});