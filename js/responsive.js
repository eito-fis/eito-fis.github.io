//Global Variables
var page = "Home";

//Title Page

//About Me and My Projects button responsiveness
$("#coverAboutMe").mouseenter(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "11%", "x":"44.5%"} );
});
$("#coverAboutMe").mouseleave(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "9%", "x":"45.5%"} );
});

$("#coverMyProjects").mouseenter(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "12%", "x":"44%"} );
});
$("#coverMyProjects").mouseleave(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "10%", "x":"45%"} );
});

//About Me and My Project button clicks
$("#coverMyProjects").click(function() {
	$(".slideOff").attr("x", "110%");
	$("video").css("left", "64%");
	$("#backButtonProject").css("opacity", "1");
	$("#projectTextHolder").css("opacity", "1");
	$("#projectTextBorder").css("height", "80%");
	page = "My Projects";
});

//My Projects Page

//Back Button click
$("#backButtonProject").click(function() {
	$(".slideOff").attr("x", "0%");
	$("video").css("left", "50%");
	$("#backButtonProject").css("opacity", "0");
	$("#projectTextHolder").css("opacity", "0");
	$("#projectTextBorder").css("height", "0%");
	page = "Home";
});
