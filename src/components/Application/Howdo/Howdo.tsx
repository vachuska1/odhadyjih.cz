import * as React from "react";
import "./Howdo.less";
import { HowdoInfoCS, HowdoInfoEN } from "./HowdoInfo";

export interface HowdoProps {
	lang: string;
}

export const Howdo: React.FC<HowdoProps> = ({ lang }) => {
	const language = lang === "cs" ? HowdoInfoCS : HowdoInfoEN;

	return (
		<div id={"Services"} className={"textWindow"}>
			<div className={"textBlock textBlock--1"}>
				<div className={"textBlock__head"}>{language.head}</div>
				<br />
				<div className={"textBlock__heading"}>{language.heading}</div>
				<div className={"textBlock__text"}>{language.location1}</div>
				<div className={"textBlock__text"}>{language.location2}</div>
				<div className={"textBlock__text"}>{language.location3}</div>
				<br />
				<br />
				<div className={"textBlock__heading"}>{language.heading2}</div>
			</div>
		</div>
	);
};
