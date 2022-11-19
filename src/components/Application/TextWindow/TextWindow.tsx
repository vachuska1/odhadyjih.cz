import * as React from "react";
import "./TextWindow.less";
import { TextWindowInfoCS, TextWindowInfoEN } from "./TextWindowInfo";

export interface TextWindowProps {
	lang: string;
}

export const TextWindow: React.FC<TextWindowProps> = ({ lang }) => {
	const language = lang === "cs" ? TextWindowInfoCS : TextWindowInfoEN;

	return (
		<div className={"textWindow"}>
			<div className={"textBlock textBlock--1"}>
				<div className={"textBlock__head"}>{language.head}</div>
				<br />
				<div className={"textBlock__heading"}>{language.heading}</div>
				<div className={"textBlock__text"}>{language.location1}</div>
				<br />
				<br />
				<div className={"textBlock__heading"}>{language.heading2}</div>
				<div className={"textBlock__text"}>{language.text}</div>
				<div className={"textBlock__text"}>{language.text1}</div>
				<div className={"textBlock__text"}>{language.text2}</div>
				<div className={"textBlock__text"}>{language.text3}</div>
				<div className={"textBlock__text"}>{language.text4}</div>
			</div>
		</div>
	);
};
