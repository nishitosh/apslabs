$(document).ready(function() {

	$('#actionMsgDiv').hide();
	
	$('#contactForm').on('submit', function(e) {
		e.preventDefault();
		
		var name = jQuery("#name").val();
		var email = jQuery("#email").val();
		//var phoneNo = jQuery("#phoneNo").val();
		var subject = jQuery("#subject").val();
		var comments = jQuery("#comments").val();
		
					
		//pretend we don't need validation
		
		$.ajax({
			url:'https://script.google.com/macros/s/AKfycbyJX7bRjGrHsjXL4X4vGLKa5beUvy9IiwYcWySELzZPzN5TLnU1/exec',
			method:'POST',
			data:{
				name:name,
				email:email,
				comments:comments,
				subject:subject,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#actionMsgDiv').show();
				$('#name').val("");
				$('#email').val("");
				$('#subject').val("");
				$('#comments').val("");
			}	

		});			
		
	});

});	

