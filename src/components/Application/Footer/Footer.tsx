import * as React from "react";
import { useEffect, useState } from "react";
import "./Footer.less";

export const Footer = () => {
	const [name, setName] = useState<string>("");
	const [nameError, setNameError] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [messageError, setMessageError] = useState<string>("");
	const [validate, setValidate] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [send, setSend] = useState<boolean>(false);
	const [successfulSend, setSuccessfulSend] = useState<boolean>(false);

	useEffect(() => {
		if (validate) {
			setLoading(true);
			setSend(true);
			sendForm();
		}
	}, [validate]);

	const validateForm = (event) => {
		event.preventDefault();
		let validation = true;
		if (name === "") {
			validation = false;
			setNameError("K pokračování je nutné vyplnit jméno");
		} else {
			setNameError("");
		}
		if (email === "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			validation = false;
			setEmailError("K pokračování je nutné zadat emailovou adresu ve správném formátu");
		} else {
			setEmailError("");
		}
		if (message === "") {
			validation = false;
			setMessageError("Vyplňte prosím s čím Vám můžeme pomoci.");
		} else {
			setMessageError("");
		}
		if (validation) {
			setValidate(true);
			setNameError("");
			setEmailError("");
			setMessageError("");
		} else {
			setValidate(false);
		}
	};

	const sendForm = () => {
		fetch("./API/contact/Contact.php", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				message: message,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				setLoading(false);
				// setSend(true);
				console.log(result);
				if (result === 1) {
					setSuccessfulSend(true);
				} else {
					setSuccessfulSend(false);
				}
			});
	};

	return (
		<div id="footer" className="footer">
			<div className="footer__heading">Apartmány Krátká</div>
			<div className="footer__cont">
				<div className="footer__contArea">
					<div className="footer__headName">Provozovatel:</div>
					<div className="footer__text">Andrea Buschbaumová</div>
					<div className="footer__text">...</div>
					<div className="footer__headName">Sociální sítě:</div>
					<div className="footer__social">
						<a href="https://www.instagram.com/salon_chiquita_plzen/" target="_blank">
							<div className="footer__socialIcon footer__socialIcon--instagram" />
						</a>
					</div>
					<div className="footer__headName">Najdete nás:</div>
					<div className="footer__text">adrea v Sušici</div>
					<div className="footer__text">Sušice, 34200</div>
				</div>
				<div className="footer__contArea">
					<div className="footer__headName footer__headName--padding">Kontaktujte nás:</div>
					<form className="footer__form">
						<input
							id="footer-name"
							type="text"
							placeholder="Vaše jméno"
							className={`footer__input ${nameError.length ? "footer__input--false" : ""}`}
							onChange={(event) => setName(event.target.value)}
							value={name}
						/>
						{nameError ? <span className="footer__message">{nameError}</span> : ""}
						<input
							id="footer-email"
							type="email"
							placeholder="Váš email"
							className={`footer__input ${emailError.length ? "footer__input--false" : ""}`}
							onChange={(event) => setEmail(event.target.value)}
							value={email}
						/>
						{emailError.length ? <span className="footer__message">{emailError}</span> : ""}
						<textarea
							id="footer-message"
							placeholder="Váš dotaz"
							className={`footer__textarea ${messageError.length ? "footer__textarea--false" : ""}`}
							onChange={(event) => setMessage(event.target.value)}
							value={message}
						/>
						{messageError.length ? <span className="footer__message">{messageError}</span> : ""}
						<button className="footer__button" onClick={(event) => validateForm(event)}>
							Odeslat dotaz
						</button>
					</form>
					{send ? (
						successfulSend ? (
							<div className="footer__messageBody">
								<div className="footer__messageTextCont">
									<div className="footer__messageText">
										Formulář byl úspěšně odeslán. Počkejte až Vás majitel kontaktuje.
									</div>
								</div>
							</div>
						) : (
							<div className="footer__messageBody">
								<div className="footer__messageTextCont">
									<div className="footer__messageText">
										Formulář se nepodařilo odeslat. Zkuste to prosím za pár minut.
									</div>
								</div>
							</div>
						)
					) : null}
				</div>
			</div>
			<div className="footer__sentence">
				<div className="footer__sentence--logo" />
				Copyright © 2021 ApartmanyKratka.cz
			</div>
		</div>
	);
};
