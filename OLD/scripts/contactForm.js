function _(id){ return document.getElementById(id); }
function submitForm(){
	_("contactSubmitBtn").disabled = true;
    _("status").innerHTML = 'In progress. Please wait ...';

    var formdata = new FormData();
	formdata.append( "firstName", _("customerFirstName").value );
	formdata.append( "lastName", _("customerLastName").value );
	formdata.append( "phone", _("customerPhone").value );
	formdata.append( "email", _("customerEmail").value );
	formdata.append( "message", _("customerMsg").value );
	var ajax = new XMLHttpRequest();

    ajax.open( "POST", "contactForm.php" );
    
    ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("contact_form").innerHTML = '<h2>Thanks '+_("customerFirstName").value + _("customerLastName").value+', We will contact you soon!</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("contactSubmitBtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );


}