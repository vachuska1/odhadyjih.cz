import * as React from "react";
import { TextCS, TextEN } from "./Texts";
import { TextsInterface } from "./TextsInterface";
import "./TextWindow.less";

interface TextWindowProps {
	lang: string;
}

export const TextWindow: React.FC<TextWindowProps> = (props) => {
	const file: TextsInterface = props.lang === "cs" ? TextCS : TextEN;

	return (
		<div id={"textWindow"} className={"textWindow"}>
			<div className={"textBlock"}>
				<div className={"textBlock__heading"}>{file.heading}</div>
				<div className={"textBlock__text"}>{file.location1}</div>
				<div className={"textBlock__text"}>{file.location2}</div>
				<div className={"textBlock__text"}>{file.gastronomy}</div>
				<div className={"textBlock__text"}>{file.nearby}</div>
				{file.appartments.map((appartment) => {
					return (
						<div className={"textBlock__appartment"}>
							<div className={"textBlock__subHeading"}>{appartment.heading}</div>
							<div className={"textBlock__subText"}>{appartment.mainInfo}</div>
							<div className={"textBlock__subText"}>{appartment.info1}</div>
							<div className={"textBlock__subText"}>{appartment.info2}</div>
							<div className={"textBlock__subText"}>{appartment.info3}</div>
							<div className={"textBlock__subText"}>{appartment.info4}</div>
							<div className={"textBlock__subText"}>{appartment.info5}</div>
							<div className={"textBlock__subText"}>{appartment.info6}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
