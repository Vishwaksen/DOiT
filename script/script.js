/*
  Author : Vishwaksen
*/

$(document).ready(function(){
	myForm.trigger("reset");
});


/*// View Resume
var view_resume = document.getElementById("view_resume");
view_resume.onclick = function(){
	window.open('https://drive.google.com/open?i','_blank');
}*/

// Handles the E-mail Functionality
$(document).ready(function(){
	$('#poster_form').hide();
	$('#poster_dropdown').hide();
	$('#preferred_work').change(function(){
		var preferred_work = $("#preferred_work").val();
		if(preferred_work == 'doer'){
			$('#poster_form').hide();
			$('#poster_dropdown').hide();
			$('#doer_form').show();
			$('#doer_dropdown').show();
		}
		else {
			$('#poster_form').show();
			$('#poster_dropdown').show();
			$('#doer_form').hide();
			$('#doer_dropdown').hide();
		}
	});
	$(".submit_form_button").click(function(){
		let flag = true;
		var preferred_work = $("#preferred_work").val();
		if(preferred_work == 'doer')
		{
		var myForm = $("#doer_form");
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var from_name = first_name + " " + last_name
		var email_id = $("#email_id").val();
		var phone_number = $("#phone_number").val();
		var dob = $("#dob").val();
		var skills = $("#skills").val();
		var availability = $("#availability").val();
		var preferred_work = $("#type_of_preferred_work").val();

		if(from_name == ""){
			flag = false;
			alert("Please Enter your Name");
			myForm.find("button").text("Submit");
			myForm.trigger("reset");
		}
		if(email_id == ""){
			flag = false;
			alert("Please Enter your Email ID");
			myForm.find("button").text("Submit");
			myForm.trigger("reset");
		}

		var email_content = `
			<table style="border:2px solid #e8491d; text-align:left;padding: 15px,15px,15px,15px;background-color:#3b5998; color:#ffffff;">
				<tr>
					<td width="110">First Name</td>
					<td width="175">${first_name}</td>
				</tr>
				<tr>
				<td width="110">Last Name</td>
				<td width="175">${last_name}</td>
				</tr>
				<tr>
				<td width="110">Email ID</td>
				<td width="175" style="color:#ffffff;">${email_id}</td>
				</tr>
				<tr>
				<td width="110">Phone Number</td>
				<td width="175">${phone_number}</td>
				</tr>
				<tr>
				<td width="110">Date of Birth</td>
				<td width="175">${dob}</td>
				</tr>
				<tr>
				<td width="110">Skills</td>
				<td width="175">${skills}</td>
				</tr>
				<tr>
				<td width="110">Availability</td>
				<td width="175">${availability}</td>
				</tr>
				<tr>
				<td width="110">Preferred Work</td>
				<td width="175">${preferred_work}</td>
				</tr>
			</table>
		`;
   	}
	else{
		var myForm = $("#poster_form");
		var first_name = $("#poster_first_name").val();
		var last_name = $("#poster_last_name").val();
		var from_name = first_name + " " + last_name
		var email_id = $("#poster_email_id").val();
		var phone_number = $("#poster_phone_number").val();
		var job_description = $("#job_description").val();
		var price = $("#price").val();

		if(from_name == ""){
			flag = false;
			alert("Please Enter your Name");
			myForm.find("button").text("Submit");
			myForm.trigger("reset");
		}
		if(email_id == ""){
			flag = false;
			alert("Please Enter your Email ID");
			myForm.find("button").text("Submit");
			myForm.trigger("reset");
		}

		var email_content = `
			<table style="border:2px solid #e8491d; text-align:left;padding: 15px,15px,15px,15px;background-color:#3b5998; color:#ffffff;">
				<tr>
					<td width="110">First Name</td>
					<td width="175">${first_name}</td>
				</tr>
				<tr>
				<td width="110">Last Name</td>
				<td width="175">${last_name}</td>
				</tr>
				<tr>
				<td width="110">Email ID</td>
				<td width="175" style="color:#ffffff;">${email_id}</td>
				</tr>
				<tr>
				<td width="110">Phone Number</td>
				<td width="175">${phone_number}</td>
				</tr>
				<tr>
				<td width="110">Job Description</td>
				<td width="175">${job_description}</td>
				</tr>
				<tr>
				<td width="110">Price</td>
				<td width="175">${price}</td>
				</tr>
			</table>
		`;
	}
		var email_json = {
			"to_name" : "Vishwaksen",
			"from_name" : from_name,
			"reply_to" : email_id,
			"message_html" : email_content
		}
		var service_id="default_service";
		var template_id="doit_template";
		emailjs.send("service_id","template_id");
		myForm.find("button").text("Submitting...");
		if(flag){
		emailjs.send(service_id,template_id,email_json)
  			.then(function(){
       		alert("Form Submitted Successfully!");
       myForm.find("button").text("Submit");
       myForm.trigger("reset");
     }, function(err) {
       alert("Form Submission failed!\r\n Response:\n " + JSON.stringify(err));
       myForm.find("button").text("Submit");
       myForm.trigger("reset");
    });}
  return false;
	});

});
