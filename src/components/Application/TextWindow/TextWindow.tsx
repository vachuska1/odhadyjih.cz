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
				<div className={"textBlock__heading"}>{language.heading}</div>
				<div className={"textBlock__text"}>{language.location1}</div>
				<div className={"textBlock__text"}>{language.location2}</div>
				<div className={"textBlock__text"}>{language.gastronomy}</div>
				<div className={"textBlock__text"}>{language.nearby}</div>
			</div>
		</div>
	);
};
