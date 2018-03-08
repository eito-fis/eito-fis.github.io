//Global Variables
var page = "Home";
var width = $(window).width();

//Title Page

//About Me and My Projects button responsiveness
$("#coverAboutMe").mouseenter(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "6%", "x":"47%"} );
});
$("#coverAboutMe").mouseleave(function() {
	if (page == "Home")
		$("#aboutMe rect").attr( {"width": "2%", "x":"49%"} );
});

$("#coverMyProjects").mouseenter(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "8%", "x":"46%"} );
});
$("#coverMyProjects").mouseleave(function() {
	if (page == "Home")
		$("#myProjects rect").attr( {"width": "4%", "x":"48%"} );
});

//About Me and My Project button clicks
$("#coverMyProjects").click(function() {
	if (page == "Home") {
		//Revert Borders
		$("#aboutMe rect").attr( {"width": "2%", "x":"49%"} );
		$("#myProjects rect").attr( {"width": "4%", "x":"48%"} );
	
		//Fade in My Projects
		var transEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionen";
		$("#slideOff").attr("x", "110%").one(transEnd, function(e) {
			$("svg").css("z-index", "-1");
			page = "My Projects";
			$("#slideOff").off(transEnd);
		});
		$("#videoHolder").css("left", "64%");
		$("#videoHolder .current .slotHolder").delay(900).animate({"box-shadow": "0px 8px 15px 7px rgb(7,7,7,0.2)"}, 400);
		$("#backButtonProject").delay(400).fadeTo("500", "1");
		$("#backButtonProject").css("left", "95%");
		$("#projectTextHolder").delay(600).fadeTo("1000", "1");
		$("#projectTitle").css( {"margin-top":"0", "margin-left":"0"} );
		$("#projectTextBorder").css("height", "80%");
		$("#projectTextBorder").css("left", "-2.1%");
		$(".videoCaption").delay(600).fadeTo("1000", "1");
		$(".videoCaption").css("padding-top", "1%");
		$(".videoNav").delay(600).fadeTo("500", "1");
	}
});

//My Projects Page

//videoNav Responsivness
$(".videoNav").mouseenter(function() {
	if (page == "My Projects") {
		$(this).animate({"boxShadow": "0px " + width/500 + "px " + width/260 + "px " +  width/1000 + " rgb(7,7,7,0.6)"}, 200);
	}
});
$(".videoNav").mouseleave(function() {
	if (page == "My Projects") {
		$(this).animate({"boxShadow": "0px 0px 0px 0px rgb(7,7,7,0.2)"}, 200);
	}
});
$(".videoNav").mousedown(function() {
	if (page == "My Projects") {
		$(this).animate({"boxShadow": "0px " + width/1000 + "px " + width/520 + "px " +  width/1400 + " rgb(7,7,7,0.6)"}, 200);
	}
});

//Vertical Carosel
$("#videoHolder").on("click", ".current .videoNav", function(event) {
	event.preventDefault();
	if (page == "My Projects") {
		var middle = $(".current");
		var up = $(".up");
		var down = $(".down");
		$("#videoHolder .current .slotHolder").delay(900).animate({"box-shadow": "0px 0px 0px 0px rgb(7,7,7,0.2)"}, 400);
		if ($(this).hasClass("projectUp")) {	
			middle.removeClass("current").addClass("down");
			up.removeClass("up").addClass("current");
			down.css("z-index", "-1").removeClass("down").addClass("up");
		}
		else if ($(this).hasClass("projectDown")) {
			middle.removeClass("current").addClass("up");
			down.removeClass("down").addClass("current");
			up.css("z-index", "-1").removeClass("up").addClass("down");
		}
		$("#videoHolder .current .slotHolder").delay(900).animate({"box-shadow": "0px 8px 15px 7px rgb(7,7,7,0.2)"}, 400);
		$(".slide").css("z-index", "0");
	}
});

//Video restart on click
$("video").click(function() {
	$(this).get(0).currentTime = 0;
});

//backButton click
$("#backButtonProject").click(function() {
	if (page == "My Projects") {
		$("svg").css("z-index", "3");
		$("#slideOff").attr("x", "0%");
		$("#videoHolder").css("left", "50%");
		$("#videoHolder .current .slotHolder").animate({"boxShadow": "0px 0px 0px 0px"}, 400);
		$("#backButtonProject").fadeTo("50", "0");
		$("#backButtonProject").css("left", "109%");
		$("#projectTextHolder").fadeTo("50", "0");
		$("#projectTitle").css( {"margin-top":"-45%", "margin-left":"-10%"} );
		$("#projectTextBorder").css("height", "0%");
		$("#projectTextBorder").css("left", "-17.1%");
		$("#videoCaption").fadeTo("50", "0");
		$("#videoCaption").css("padding-top", "5%");
		$(".videoNav").animate({"box-shadow": "0px 0px 0px 0px rgb(7,7,7,0.2)"}, 75).fadeTo("50", "0");
		page = "Home";
	}
});
