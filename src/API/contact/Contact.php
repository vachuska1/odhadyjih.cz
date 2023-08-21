<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Method: *");

$json = json_decode(file_get_contents('php://input'), true);

$name = $json["name"];
$email = $json["email"];
$message = $json["message"];

$emailTo = "odhadyvachuska@gmail.com";
$headers =
    "From:" . $email . "\r\n" .
    "Reply-To:" . $email . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-Transfer-Encoding: 8bit" . "\r\n" .
    "Content-Type: text/html; charset=utf-8" . "\r\n";
$subjectAdmin = '=?UTF-8?B?' . base64_encode('Potvrzení o požadavku na stránce ApartmanyKratka.cz') . '?=';
$message =
    '<div style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            width: 100%; 
            height: 80px; 
            font-size: 28px;
            letter-spacing: 3px;
            color: #ffffff;
            background-color: #3850ba">
            ApartmanyKratka
        </div>' .
    '</br>' .
    '<p style="font-size: 16px; font-weight: bold; margin: 0 auto 20px; width: 100%; text-align: center;">Potvrzení o vyplnění formuláře na stránce ApartmanyKratka.cz</p></br>' .
    '</br>' .
    '<p style="font-size: 13px;"><strong>jméno:</strong> ' . $name . '</p>' .
    '<p style="font-size: 13px;"><strong>email:</strong> ' . $email . '</p>' .
    '<p style="font-size: 13px; max-width: 400px;"><strong>zpráva:</strong> ' . $message . '</p>';

if (mail($emailTo, $subjectAdmin, $message, $headers)) {
    echo json_encode(1);
} else {
    echo json_encode(0);
}
