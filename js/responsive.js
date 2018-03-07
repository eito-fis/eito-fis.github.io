//Global Variables
var page = "Home";

//Title Page

//About Me and My Projects button responsiveness
$("#coverAboutMe").mouseenter(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "9%", "x":"45.5%"} );
});
$("#coverAboutMe").mouseleave(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "6%", "x":"47%"} );
});

$("#coverMyProjects").mouseenter(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "11%", "x":"44.5%"} );
});
$("#coverMyProjects").mouseleave(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "8%", "x":"46%"} );
});

//About Me and My Project button clicks
$("#coverMyProjects").click(function() {
	if (page == "Home") {
		//Revert Borders
		$("#aboutMe rect").attr( {"width": "6%", "x":"47%"} );
		$("#myProjects rect").attr( {"width": "8%", "x":"46%"} );
	
		//Fade in My Projects
		$(".slideOff").attr("x", "110%");
		$("#videoHolder").css("left", "64%");
		$("#backButtonProject").delay(400).fadeTo("500", "1");
		$("#backButtonProject").css("left", "94%");
		$("#projectTextHolder").delay(600).fadeTo("1000", "1");
		$("#projectTitle").css("margin-top", "0");
		$("#projectTextBorder").css("height", "80%");
		$("#projectTextBorder").css("left", "-2.1%");
		$("#videoCaption").delay(600).fadeTo("1000", "1");
		$("#videoCaption").css("padding-top", "1%");
		page = "My Projects";
	}
});

//My Projects Page

//Back Button click
$("#backButtonProject").click(function() {
	if (page == "My Projects") {
		$(".slideOff").attr("x", "0%");
		$("#videoHolder").css("left", "50%");
		$("#backButtonProject").fadeTo("50", "0");
		$("#backButtonProject").css("left", "109%");
		$("#projectTextHolder").fadeTo("100", "0");
		$("#projectTitle").css("margin-top", "-15%");
		$("#projectTextBorder").css("height", "0%");
		$("#projectTextBorder").css("left", "-17.1%");
		$("#videoCaption").fadeTo("50", "0");
		$("#videoCaption").css("padding-top", "5%");
		page = "Home";
	}
});
