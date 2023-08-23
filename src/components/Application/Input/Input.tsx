import * as React from "react";
import "./Input.less";
import { useState, useEffect } from "react";
import { HowdoProps } from "../Howdo/Howdo";

export const Input = (props: HowdoProps) => {
	const [name, setName] = useState<string>("");
	const [nameError, setNameError] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [number, setNumber] = useState<string>("");
	const [numberError, setNumberError] = useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [addressError, setAddressError] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [subjectError, setSubjectError] = useState<string>("");
	const [purpose, setPurpose] = useState<string>("");
	const [purposeError, setPurposeError] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [messageError, setMessageError] = useState<string>("");
	const [validate, setValidate] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [send, setSend] = useState<boolean>(false);
	const [successfulSend, setSuccessfulSend] = useState<boolean>(false);

	useEffect(() => {
		setSubject(props.lang === "cs" ? "Předmět ocenění" : "Subject");
		setPurpose(props.lang === "cs" ? "Účel odhadu ocenění" : "Purpose");
	}, [props.lang]);

	useEffect(() => {
		if (validate) {
			setLoading(true);
			setSend(true);
			sendForm();
		}
	}, [validate]);

	const validateForm = (event) => {
		console.log(`${name}, ${email}, ${number}, ${address}, ${subject}, ${purpose}, ${message}`);
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
		if (address === "") {
			validation = false;
			setAddressError(
				props.lang === "cs" ? "Vyplňte prosím adresu nemovitosti" : "Please fill in address of property",
			);
		} else {
			setAddressError("");
		}
		if (number === "") {
			validation = false;
			setNumberError(props.lang === "cs" ? "Vyplňte prosím telefonní číslo" : "Please fill phone number");
		} else {
			setNumberError("");
		}
		//dodelat
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
				number: number,
				address: address,
				subject: subject,
				purpose: purpose,
				message: message,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
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
		setNumber("");
		setAddress("");
		setSend(false);
		setSuccessfulSend(false);
	};

	const finishFormToContinue = () => {
		setSend(false);
		setSuccessfulSend(false);
	};
	return (
		<div className="Input">
			<form className="Input__Form">
				<div className="Input__Block">
					<input
						className="Input__Name"
						placeholder={props.lang === "cs" ? "Vaše jméno a příjmení" : "Your firstname and surname"}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				{nameError ? <span className="footer__message">{nameError}</span> : ""}
				<div className="Input__Block">
					<input
						className="Input__Phone"
						placeholder={props.lang === "cs" ? "Vaše telefonní číslo" : "Your phone number"}
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
				{numberError ? <span className="footer__message">{numberError}</span> : ""}
				<div className="Input__Block">
					<input
						className="Input__Email"
						placeholder={props.lang === "cs" ? "Váš email" : "Your email"}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{emailError ? <span className="footer__message">{emailError}</span> : ""}
				<div className="Input__Block">
					<input
						className="Input__Adress"
						placeholder={
							props.lang === "cs"
								? "Adresa nemovitosti, popřípadě LV atd."
								: "Address of the property, or LV, etc."
						}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				{addressError ? <span className="footer__message">{addressError}</span> : ""}
				<div className="Input__Block">
					<select name="Tip" id="Tip-select" onChange={(e) => setSubject(e.target.value)}>
						<option value="Předmět ocenění">
							{props.lang === "cs" ? "Předmět ocenění" : "Subject appreciated"}
						</option>
						<option value="Rodinný dům">{props.lang === "cs" ? "Rodinný dům" : "Family house"}</option>
						<option value="Byt">{props.lang === "cs" ? "Byt" : "flat"}</option>
						<option value="Pozemek">{props.lang === "cs" ? "Pozemek" : "Land"}</option>
						<option value="Garáž">{props.lang === "cs" ? "Garáž" : "Garage"}</option>
						<option value="Chata/Chalupa">{props.lang === "cs" ? "Chata/Chalupa" : "Cottage"}</option>
						<option value="Bytový dům">{props.lang === "cs" ? "Bytový dům" : "Appartment building"}</option>
						<option value="Administratiční budova">
							{props.lang === "cs" ? "Administratiční budova" : "Administrative building"}
						</option>
						<option value="Penzion/Hotel">{props.lang === "cs" ? "Penzion/Hotel" : "Pension/Hotel"}</option>
					</select>
				</div>
				<div className="Input__Block">
					<select name="Suppose" id="Suppose-select" onChange={(e) => setPurpose(e.target.value)}>
						<option value="Účel odhadu nemovitosti">
							{props.lang === "cs" ? "Účel odhadu nemovitosti" : "Purpose of real estate appraisal"}
						</option>
						<option value="Dědické řízení">
							{props.lang === "cs" ? "Dědické řízení" : "Inheritance proceedings"}
						</option>
						<option value="Vypořádání spoluvlastnických podílů">
							{props.lang === "cs"
								? "Vypořádání spoluvlastnických podílů"
								: "Settlement of co-ownership shares"}
						</option>
						<option value="Prodej nemovitosti">
							{props.lang === "cs" ? "Prodej nemovitosti" : "Sale of real estate"}
						</option>
						<option value="Vlastní potřeba">{props.lang === "cs" ? "Vlastní potřeba" : "Own need"}</option>
						<option value="Jiné (viz poznámka)">
							{props.lang === "cs" ? "Jiné (viz poznámka)" : "Others(to note)"}
						</option>
					</select>
				</div>
				<div className="Input__Block">
					<input
						className="Input__Note"
						placeholder={props.lang === "cs" ? "Poznámka, další informace" : "Note, more information"}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div className="Input__Block">
					<button type="submit" className="Input__Button" onClick={(event) => validateForm(event)}>
						{props.lang === "cs" ? "Odeslat" : "Send"}
					</button>
				</div>
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
									? "Formulář byl úspěšně odeslán. Do max 24 hodin se Vám někdo ozve."
									: "The form was sent successfully. Someone will contact you within 24 hours."}
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
			) : null}
		</div>
	);
};
