<?php
if(isset($_POST['submit'])){
  $name =$_POST['name'];
  $subject =$_POST['subject'];
  $mailFrom =$_POST['mail'];
  $message =$_POST['message'];

  $mailTo = "merisuperak@merisuperak.com";
  // $headers = "From: ".$mailFrom;
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $headers .= "From:" .$mailFrom . "\r\n" .
  "Reply-To: successive.testing@gmail.com" . "\r\n" .
  "X-Mailer: PHP/" . phpversion();
  
  $txt = "You have recieved an e-mail from " .$name. ".\n\n".$message;
  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html?mailsend");

}
