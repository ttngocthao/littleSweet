<?php
if( isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['message']) ){
	$firstName = $_POST['firstName']; // HINT: use preg_replace() to filter the data
	$lastName = $_POST['lastName']; // HINT: use preg_replace() to filter the data
	$phone = $_POST['phone']; // HINT: use preg_replace() to filter the data
	$email = $_POST['email'];
	$m = nl2br($_POST['message']);
	$to = "webdeveloper@thaotruong.uk";
	$from = $email;
	$subject = 'Contact Form Message';
	$message = '<b>First Name:</b> '.$firstName. '<b>Last Name:</b> ' .$lastName.' <br><b>phone:</b> ' .$phone. ' <br><b>Email:</b> '.$email.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "Success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>