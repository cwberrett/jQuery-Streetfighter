$(document).ready(function(){
	$(".ryu-action").hide();
	$(".ryu-still").show();  //default state

	$('.ryu').mouseenter(function() {
		$(".ryu-action").hide();
		$('.ryu-ready').show();
	})//Ryu gets ready on mouseover
	.mouseleave(function() {
		$(".ryu-action").hide();
		$('.ryu-still').show();
	})//ryu relaxes on mouseleave
	.mousedown(function() {
		playHadouken();
		$(".ryu-action").hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			});
	})//fire hadouken
	.mouseup(function() {
		$(".ryu-action").hide();
		$('.ryu-ready').show();
	});//return to ready position
	$(document).keydown(function(x) {
		if (x.keyCode == 88) {
			playcool();
			$('.ryu-action').hide();
        	$('.ryu-cool').show();
		}
	});
	$(document).keyup(function(x){
		if(x.keyCode == 88) {
			$('.ryu-action').hide();
        	$('.ryu-still').show();
        	$('#cool-sound')[0].pause();
		}
	});
});
var hadoukenSound = false;
function playHadouken () {
	hadoukenSound = !hadoukenSound
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
var coolSound = false;
function playcool () {
	coolSound = !coolSound;
  //$('#cool-sound')[0].volume = 0.5;
  //$('#hadouken-sound')[0].load();
  $('#cool-sound')[0].play();
}
