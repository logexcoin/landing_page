jQuery(document).ready(function($){
		
   // Slider
	if ($('#home-slider').length > 0) {
	$('#home-slider').owlCarousel({
	    loop:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true,
	            navText: '',
	            dots: false,
	            autoplay: true,
	            smartSpeed: 900
	        }
	      
	    }
	});
	}
	
	
	 $('.map').click(function () {
	    $('.map iframe').css("pointer-events", "auto");
	});
	
	
	$( window ).scroll(function() {
	  $('.map iframe').css("pointer-events", "none");
	});	
      
	setTimeout(function() {
		$('select').styler();
		$('.radio input, .bottom-row input, .check input').styler();
	}, 100);
	
	$(".navbar-toggle").click(function () { 
		$(this).toggleClass('open');
	});
	
	
	 $("#submit").click(function() {
	var name = $("#name").val();
	var email = $("#email").val();
	$("#returnmessage").empty(); // To empty previous error/success message.
	// Checking for blank fields.
	if (name == '' || email == '') {
	alert("Please Fill Required Fields");
	} else {
	// Returns successful data submission message when the entered information is stored in database.
	$.post("contact.php", {
	name1: name,
	email1: email
	}, function(data) {
	$("#returnmessage").append(data); // Append returned message to message paragraph.
	if (data == "Your Query has been received, We will contact you soon.") {
	$("#form")[0].reset(); // To reset form fields on success.
	}
	});
	}
});

 $("#submit2").click(function() {
	var name = $("#name2").val();
	var email = $("#email2").val();
	$("#returnmessage2").empty(); // To empty previous error/success message.
	// Checking for blank fields.
	if (name == '' || email == '') {
	alert("Please Fill Required Fields");
	} else {
	// Returns successful data submission message when the entered information is stored in database.
	$.post("contact.php", {
	name1: name,
	email1: email,
	}, function(data) {
	$("#returnmessage2").append(data); // Append returned message to message paragraph.
	if (data == "Your Query has been received, We will contact you soon.") {
	$("#form2")[0].reset(); // To reset form fields on success.
	}
	});
	}
});


});