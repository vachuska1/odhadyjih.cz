import * as React from "react";
import "./Who.less";
import { WhoInfoCS, WhoInfoEN } from "./WhoInfo";

export interface WhoProps {
	lang: string;
}

export const Who: React.FC<WhoProps> = ({ lang }) => {
	const language = lang === "cs" ? WhoInfoCS : WhoInfoEN;

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
				<div className={"textBlock__text"}>{language.text5}</div>
				<div className={"textBlock__text"}>{language.text6}</div>
				<div className={"textBlock__text"}>{language.text7}</div>
				<div className={"textBlock__text"}>{language.text8}</div>
				<div className={"textBlock__text"}>{language.text9}</div>
				<div className={"textBlock__text"}>{language.text10}</div>
				<div className={"textBlock__text"}>{language.text11}</div>
				<div className={"textBlock__text"}>{language.text12}</div>
				<div className={"textBlock__text"}>{language.text13}</div>
			</div>
		</div>
	);
};
