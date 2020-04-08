<?php

    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];
    $userPhone = $_POST['userPhone'];
    $userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = "UTF-8";
    $mail->SMTPDebug = 0;                      // Enable verbose debug 
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to 
    $mail->SMTPAuth   = true;                                   // Enable SMTP 
    $mail->Username   = 'aztecmaster@mail.ru';                     // SMTP username
    $mail->Password   = 'aztec5286KOok6825';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; 
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('aztecmaster@mail.ru', 'Константин Кротов');
    $mail->addAddress('ckwebmast@gmail.com');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}. Телефон: ${userPhone}. Почта: ${userEmail}. Вопросы: $userQuestion";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}