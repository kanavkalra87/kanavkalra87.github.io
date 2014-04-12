$(document).ready(function(){
	$('body').on('click', '.headerLink', function () {
			$(document).attr("title", "Vivek Singh Memorial Trust - " + $(this).text());
			$("#headerUL").find(".selected").removeClass("selected");
			$(this).parent().addClass("selected");
			$("#dynamicBody").load("htmlPages/" + $(this).attr('id') + ".html");
	});
	
	$('body').on('click', '.highLightsLink', function () {
			$("#overlayPopup").html("Loading...");
			$("#overlayPopup").load("highlights/" + $(this).attr('id') + ".html");
			$("#overlayPopup").popup("show");
	});
});

