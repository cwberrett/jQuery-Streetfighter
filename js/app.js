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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			});
		//play sound
		//show throw
	})//fire hadouken
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})//return to ready position
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}