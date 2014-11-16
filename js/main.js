var $win = $(window);
var $hola = $('.hola');
var $holaSection = $('.hola');

$win.on('scroll', function() {
	var scrollPos=$win.scrollTop();
	
	$sun.css('transform','rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
	$shipSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$holaSection.waypoint(function() {
	$dipper.addClass('js-hola-fade');
}, { offset:'50%' });
