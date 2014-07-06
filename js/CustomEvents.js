$(document).ready(function(){
	$(window).scroll(function() {
	  if($(window).scrollTop() > 120){
		$("#navigation").addClass("navigationBarOnTop");
	  }else{
		$("#navigation").removeClass("navigationBarOnTop");
		}
		
	});
	
	$('body').on('click', '.headerLink', function () {
		$(document).attr("title", "Vivek Singh Memorial Trust - " + $(this).text());
		$("#TopMenu").find(".topmenuSelected").removeClass("topmenuSelected");
		$(this).parent().addClass("topmenuSelected");
		if($(this).text() == "Projects"){
			$("#generalBody").hide();
			$("#projectsBody").show();
			$("#projectsBody").load("htmlPages/" + $(this).attr('id') + ".html");
		}else{
			$("#projectsBody").hide();
			$("#generalBody").show();			
			$("#dynamicBody").load("htmlPages/" + $(this).attr('id') + ".html");
		}
	});
	
	$('body').on('click', '.highLightsLink', function () {
		$("#overlayPopup").html("<img src='images/ajax-loader.gif'/>");
		$("#overlayPopup").load("highlights/" + $(this).attr('id') + ".html");
		$("#overlayPopup").popup("show");
	});
	
	$('body').on('click', '.projectsLink', function () {
		$("#projectsBody").load("projects/" + $(this).attr('id') + ".html");
		//$("#projectsBody").load("projects/gallery-details.html");
	});
	$('body').on('click', '.projectMoreDetails', function () {
		//$("#overlayPopup").html("Loading...");
		//$("#overlayPopup").load("projects/" + $(this).attr('id') + ".html");
		//$("#overlayPopup").popup("show");
		$("#projectsBody").load("projects/" + $(this).attr('id') + ".html")
	});
	$('body').on('click', '.returnToProjects', function () {
		$("#generalBody").hide();
		$("#projectsBody").show();
		$("#projectsBody").load("htmlPages/projects.html");
	});
	$('body').on('click', '#newsButton', function () {
		$( "#newsChildDiv" ).slideToggle( "slow");
	});
	$('body').on('click', '#impLinks', function () {
		$( "#impLinksChildDiv" ).slideToggle( "slow");
	});
	$('body').on('click', '#donateNow', function () {
		$("#overlayPopup").html("<img src='images/ajax-loader.gif'/>");
		$("#overlayPopup").load("htmlPages/donateNow.html");
		$("#overlayPopup").popup("show");
	});
});

(function(){
	appRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'home': 'home',
			'ourMission': 'ourMission',
			'scholarships': 'scholarships',
			'projects': 'projects',
			'highlights': 'highlights',
			'workingCommitte':'workingCommitte',
			'about':'about',
			'contact':'contact',
			'VSMemorialScholarship':'VSMemorialScholarship',
			'VivekEkUjjwalBhavishya':'VivekEkUjjwalBhavishya',
			'vsUjwalMoreDetails':'vsUjwalMoreDetails',
			
		},
		loadViewWithSideBar: function(pageName){
			//window.scrollTo(0, 0);
			$(document).attr("title", "Vivek Singh Memorial Trust - " +pageName);
			$("#TopMenu").find(".topmenuSelected").removeClass("topmenuSelected");
			$("#"+pageName+"Id").parent().addClass("topmenuSelected");
			$("#projectsBody").hide();
			$("#generalBody").show();			
			$("#dynamicBody").load("htmlPages/"+pageName+".html");
			window.scrollTo(0, 0);
		},
		loadViewWithoutSideBar: function(pageName){
			//window.scrollTo(0, 0);
			$(document).attr("title", "Vivek Singh Memorial Trust - " + pageName);
			$("#TopMenu").find(".topmenuSelected").removeClass("topmenuSelected");
			$("#"+pageName+"Id").parent().addClass("topmenuSelected");
			
			$("#generalBody").hide();
			$("#projectsBody").show();
			$("#projectsBody").load("htmlPages/" +pageName +  ".html");
			window.scrollTo(0, 0);
		},
		home: function(){
			this.loadViewWithSideBar("home");
		},
		ourMission : function(){
			this.loadViewWithSideBar("ourMission");
		},
		scholarships : function(){
			this.loadViewWithSideBar("scholarships");
		},
		projects : function(){
			this.loadViewWithoutSideBar("projects");
		},
		highlights : function(){
			this.loadViewWithSideBar("highlights");
		},
		workingCommitte : function(){
			this.loadViewWithSideBar("workingCommitte");
		},
		about : function(){
			this.loadViewWithSideBar("about");
		},
		contact : function(){
			this.loadViewWithSideBar("contact");
		},
		
		loadProjectDetails: function(){
			$(document).attr("title", "Vivek Singh Memorial Trust - Projects");
			$("#TopMenu").find(".topmenuSelected").removeClass("topmenuSelected");
			$("#projectsId").parent().addClass("topmenuSelected");
			$("#generalBody").hide();
			$("#projectsBody").show();
		},
		VSMemorialScholarship: function(){
			//window.scrollTo(0, 0);
			this.loadProjectDetails();
			$("#projectsBody").load("projects/VSMemorialScholarship.html");
			window.scrollTo(0, 0);
		},
		VivekEkUjjwalBhavishya: function(){
			//window.scrollTo(0, 0);
			this.loadProjectDetails();			
			$("#projectsBody").load("projects/VivekEkUjjwalBhavishya.html");
			window.scrollTo(0, 0);
		},
		vsUjwalMoreDetails: function(){
			//window.scrollTo(0, 0);
			this.loadProjectDetails();
			$("#projectsBody").load("projects/vsUjwalMoreDetails.html");
			window.scrollTo(0, 0);
		},
		
		
	});

new appRouter;
Backbone.history.start();

})();
