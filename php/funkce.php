<?php
//mail form
if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$to = 'studenti@czu.cz';
		$subject = 'Vzkaz z webu arnold';
		
		$body = "Od: $name\n E-Mail: $email\n Zpráva:\n $message";
		
		if (mail ($to, $subject, $body)) {
		$result='<div class="uspesne_odeslano">Úspěšně odesláno!</div>';
		}
}
?>
