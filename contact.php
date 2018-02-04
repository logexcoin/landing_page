<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


$subject = '';

$template = ''
. 'Name:' . $name . '<br/>'
. 'Email:' . $email . '<br/>';
$sendmessage = "<div>" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("support@logexcoin.io", $subject, $sendmessage, $headers);
echo "Thank you for your interest. Excited about LogeX? Follow Us on Twitter!";

} else {
echo "<span>* invalid email *</span>";
}
?>

