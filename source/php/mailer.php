<?php
  require 'PHPMailer/PHPMailerAutoload.php';

  if (isset($_POST['email'])) {

    $mail = new PHPMailer;

    $clientEmail = $_POST['email'];
    $clientName = $_POST['name'];
    $clientMessage = $_POST['message'];


    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.alxhall.se';                      // Specify main and backup server
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'ah@alxhall.se';                    // SMTP username
    $mail->Password = 'le65q333';                         // SMTP password
    // $mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

    $mail->From = $clientEmail;
    $mail->FromName = $clientName;
    $mail->addAddress('oktobra@gmail.com');  // Add a recipient

    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    // $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'AID.SE - support';
    $mail->Body    = $clientMessage;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->send()) {
       echo 'Message could not be sent.';
       echo 'Mailer Error: ' . $mail->ErrorInfo;
       exit;
    }

    echo 'Message has been sent';
  }
