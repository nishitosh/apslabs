var xhr = null;
 
  /**
  * Function on document ready
  */
jQuery(document).ready(function(){
	jQuery("#actionMsgDiv").hide();
	
	jQuery("#contactForm").submit(function(event){
             event.preventDefault();
            sendEmail(); 
        
    });                      
                               
 });
 
	/**
	  * Ajax call
	  */
	function sendEmail(){
	    
		var name = jQuery("#name").val();
		var email = jQuery("#email").val();
		//var phoneNo = jQuery("#phoneNo").val();
		var subject = jQuery("#subject").val();
		var contactMsg = jQuery("#comments").val();
		var htmlMsg = createMessage(contactMsg);
		var staticText = 'An inquiry has been made for USP with below details:';
		var autoGenTxt = '<br/><br/><br/> <b> Regards<br/> USP Helpdesk<br/><br/></b> <i>This is an auto-generated mail. Please do not reply.</i>';
		var html = '<html> <br/><br/>'+ staticText+ '<br/><br/><br/>' + htmlMsg+ '<br/><br/>'+ name+'<br/><br/>Email: '+email+autoGenTxt+'<br/></html>';
	    jQuery.ajax({
	      type: "POST",
	      url: "https://mandrillapp.com/api/1.0/messages/send.json",
	      data: {
	                    'key': '9kpucAEB9Njr1HWW6yQ8Og',
	                    'message': {
	                      'from_email': 'uspbiologics@gmail.com',
	                      'to': [
	                              {
	                                'email': 'info@uspbiologics.com', 
	                                'name': 'Inquiry: USP',
	                                'type': 'to'
	                              }
	                            ],
	                      'autotext': 'true',
	                      'subject': subject,
	                      'html': html
	                    }
	      }
	    }).done(function(response) {
	       console.log(response); // if you're into that sorta thing
	       //TODO send back message in div
	       jQuery("#name").val('');
		   jQuery("#email").val('');
		
			jQuery("#subject").val('');
			jQuery("#comments").val('');
	       jQuery("#actionMsgDiv").show();
	    });
	                               
	}
	
	// TODO create msg by tokenizing
	function createMessage(line){
		var msg;
		msg=line;
		
		return msg;
		
	}
	

