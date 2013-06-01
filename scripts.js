$(document).ready(function(){
	$("#container > div").hover(
		function(){
			$(this).addClass("banana");
		},
		function(){
			$(this).removeClass("banana");	
		}
	);
	$("#container > div").click(function(){
		alert($(this).text());
	});
});
