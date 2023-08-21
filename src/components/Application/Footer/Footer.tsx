import * as React from "react";
import { useEffect, useState } from "react";
import "./Footer.less";

interface FooterProps {
	lang: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
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
			setNameError(
				props.lang === "cs" ? "K pokračování je nutné vyplnit jméno" : "You must fill in the name to continue",
			);
		} else {
			setNameError("");
		}
		if (email === "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			validation = false;
			setEmailError(
				props.lang === "cs"
					? "K pokračování je nutné zadat emailovou adresu ve správném formátu"
					: "To continue, you must enter an email address in the correct format",
			);
		} else {
			setEmailError("");
		}
		if (message === "") {
			validation = false;
			setMessageError(
				props.lang === "cs"
					? "Vyplňte prosím s čím Vám můžeme pomoci"
					: "Please fill in what we can help you with",
			);
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
		fetch("./src/API/contact/Contact.php", {
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
				if (result === 1) {
					setSuccessfulSend(true);
				} else {
					setSuccessfulSend(false);
				}
			});
	};

	const finishForm = () => {
		setName("");
		setEmail("");
		setMessage("");
		setSend(false);
		setSuccessfulSend(false);
	};

	const finishFormToContinue = () => {
		setSend(false);
		setSuccessfulSend(false);
	};

	return (
		<div id="footer" className="footer">
			<div className="footer__cont">
				<div className="footer__contArea">
					<div className="footer__headName">
						{props.lang === "cs" ? "Kontaktní osoby:" : "Contact persons:"}
					</div>
					<div className="footer__text">
						<li>
							<strong>Ing. Natálie Jurdová</strong>
						</li>
						tel: +420 727 838 131, IČO: 14325764 <br />
					</div>
					<br />
					<div className="footer__text">
						<li>
							<strong>Ing. Karel Brůha</strong>
						</li>{" "}
						tel: +420 606 523 667, IČO: 07608128 <br />
					</div>
					<br />
					<div className="footer__text">
						<li>
							<strong>Ing. Aleš Vachuška</strong>
						</li>{" "}
						tel: +420 774 104 020, IČO: 14437830{" "}
					</div>
					<br />
					<div className="footer__headName">{props.lang === "cs" ? "Provozovatel:" : "Operator:"}</div>
					<div className="footer__text">
						<li>
							<strong>Ing. Aleš Vachuška (jakswebem.cz)</strong>
						</li>{" "}
					</div>
					<div className="footer__text">Tel: +420 774 104 020, IČO: 14437830</div>
					<br />

					<div className="footer__headName">{props.lang === "cs" ? "Sociální sítě" : "Social sites"}</div>
					<div className="footer__social">
						<a href="https://www.instagram.com/odhadyjiznicechy/" target="_blank">
							<div className="footer__socialIcon footer__socialIcon--ig" />
						</a>
					</div>
					<div className="footer__headName">{props.lang === "cs" ? "Najdete nás:" : "You can find us:"}</div>
					<div className="footer__text">
						<li>
							<strong>Krajinská 244/17, 370 01 České Budějovice</strong>
						</li>
					</div>
				</div>
				{/* <div className="footer__contArea">
					<div className="footer__headName footer__headName--padding">
						{props.lang === "cs" ? "Kontaktujte nás:" : "Contact us:"}
					</div>
					<form className="footer__form">
						<input
							id="footer-name"
							type="text"
							placeholder={props.lang === "cs" ? "Vaše jméno" : "Your name"}
							className={`footer__input ${nameError.length ? "footer__input--false" : ""}`}
							onChange={(event) => setName(event.target.value)}
							value={name}
						/>
						{nameError ? <span className="footer__message">{nameError}</span> : ""}
						<input
							id="footer-email"
							type="email"
							placeholder={props.lang === "cs" ? "Váš email" : "Your email"}
							className={`footer__input ${emailError.length ? "footer__input--false" : ""}`}
							onChange={(event) => setEmail(event.target.value)}
							value={email}
						/>
						{emailError.length ? <span className="footer__message">{emailError}</span> : ""}
						<textarea
							id="footer-message"
							placeholder={props.lang === "cs" ? "Váš dotaz" : "Your message"}
							className={`footer__textarea ${messageError.length ? "footer__textarea--false" : ""}`}
							onChange={(event) => setMessage(event.target.value)}
							value={message}
						/>
						{messageError.length ? <span className="footer__message">{messageError}</span> : ""}
						<button className="footer__button" onClick={(event) => validateForm(event)}>
							{props.lang === "cs" ? "Odeslat dotaz" : "Send your message"}
						</button>
					</form>
					{send ? (
						loading ? (
							<div className={"footer__messageBody"}>
								<div className={"footer__messageLoading"} />
							</div>
						) : successfulSend ? (
							<div className="footer__messageBody">
								<div className="footer__messageTextCont">
									<div className="footer__messageText">
										{props.lang === "cs"
											? "Formulář byl úspěšně odeslán. Vyčkejte prosím než Vás majitel kontaktuje."
											: "The form was sent successfully. Please wait while the owner contacts you."}
									</div>
									<div className="footer__button" onClick={finishForm}>
										{props.lang === "cs" ? "pokračovat" : "continue"}
									</div>
								</div>
							</div>
						) : (
							<div className="footer__messageBody">
								<div className="footer__messageTextCont">
									<div className="footer__messageText">
										{props.lang === "cs"
											? "Formulář se nepodařilo odeslat. Zkuste to prosím za pár minut."
											: "The form could not be submitted. Please try again in a few minutes."}
									</div>
									<div className="footer__button" onClick={finishFormToContinue}>
										{props.lang === "cs" ? "pokračovat" : "continue"}
									</div>
								</div>
							</div>
						)
					) : null} */}
				{/* </div> */}
			</div>
			<div className="footer__heading">
				<div className="footer__logo"></div>
			</div>
			<div className="footer__web">
				Vytvořil:
				<a href="https://www.jakswebem.cz/">jakswebem.cz</a>
			</div>
		</div>
	);
};
