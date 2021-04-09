<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Method: *");

$json = json_decode(file_get_contents('php://input'), true);

$name = $json["name"];
$email = $json["email"];
$message = $json["message"];

//$headers =  "From:" . $email . "\r\n" .
//    "Reply-To:" . $email . "\r\n" .
//    "X-Mailer: PHP/" . phpversion() . "\r\n" .
//    "MIME-Version: 1.0" . "\r\n" .
//    "Content-Transfer-Encoding: 8bit" . "\r\n" .
//    "Content-Type: text/html; charset=utf-8" . "\r\n";
//$toAdmin = "dadu@salonchiquita.cz, jakub@salonchiquita.cz";
//$subjectAdmin = '=?UTF-8?B?' . base64_encode('Dotaz na stránce Salonchiquita.cz') . '?=';
//
//if (mail($toAdmin, $subjectAdmin, $message, $headers)) {
//    echo json_encode(1);
//} else {
//    echo json_encode(0);
//}

echo json_encode(1);