<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Method: *");

$json = json_decode(file_get_contents('php://input'), true);

$name = $json["name"];
$email = $json["email"];
$number = $json["number"];
$address = $json["address"];
$subject = $json["subject"];
$purpose = $json["purpose"];
$messages = $json["message"];

$toAdmin = "odhadyvachuska@gmail.com";
$headers =
    "From:" . $email . "\r\n" .
    "Reply-To:" . $email . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-Transfer-Encoding: 8bit" . "\r\n" .
    "Content-Type: text/html; charset=utf-8" . "\r\n";
$subjectAdmin = '=?UTF-8?B?' . base64_encode('Potvrzení o požadavku na stránce OdhadyVachuska.cz') . '?=';
$message =
    '<div>
            OdhadyVachuska
        </div>' .
    '</br>' .
    '<p>Potvrzení o vyplnění formuláře na stránce OdhadyVachuska.cz</p></br>' .
    '</br>' .
    '<p style="font-size: 13px;"><strong>jmeno:</strong> ' . $name . '</p>' .
    '<p style="font-size: 13px;"><strong>email:</strong> ' . $email . '</p>' .
    '<p style="font-size: 13px;"><strong>telefonni cislo:</strong> ' . $number . '</p>' .
    '<p style="font-size: 13px;"><strong>adresa:</strong> ' . $address . '</p>' .
    '<p style="font-size: 13px;"><strong>predmet:</strong> ' . $subject . '</p>' .
    '<p style="font-size: 13px;"><strong>ucel:</strong> ' . $purpose . '</p>' .
    '<p style="font-size: 13px; max-width: 400px;"><strong>zpráva:</strong> ' . $messages . '</p>';

if (mail($toAdmin, $subjectAdmin, $message, $headers)) {
    echo json_encode(1);
} else {
    echo json_encode(0);
}
