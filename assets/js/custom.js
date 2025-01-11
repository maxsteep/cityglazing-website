/*$(document).ready(function(){

	$(".outb a").append("<em></em>");
	
	$(".outb a").hover(function() {
		$(this).find("em").animate({opacity: "show", top: "0"}, "slow");
		var hoverText = $(this).attr("title");
	    $(this).find("em").text(hoverText);
	}, function() {
		$(this).find("em").animate({opacity: "hide", top: "-85"}, "fast");
	});


});

$(document).tooltip({show: {effect:"none", delay:0}});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).tooltip(options) {
    
}*/

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$('a').tooltip({
     'delay': { show: 0, hide: 300 }
});