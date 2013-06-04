$(document).ready(function(){
	$("#container > div").hover(
		function(){
			$(this).toggleClass("banana");
		});
	$("#container > div").click(function(){
		alert($(this).text());
	});
});
