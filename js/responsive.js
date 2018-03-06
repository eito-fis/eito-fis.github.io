//Title Page
//About Me and My Projects button responsiveness
$("#coverAboutMe").mouseenter(function() {
	$("#aboutMe rect").attr( {"width": "11%", "x":"44.5%"} );
});
$("#coverAboutMe").mouseleave(function() {
	$("#aboutMe rect").attr( {"width": "9%", "x":"45.5%"} );
});

$("#coverMyProjects").mouseenter(function() {
	$("#myProjects rect").attr( {"width": "12%", "x":"44%"} );
});
$("#coverMyProjects").mouseleave(function() {
	$("#myProjects rect").attr( {"width": "10%", "x":"45%"} );
});
