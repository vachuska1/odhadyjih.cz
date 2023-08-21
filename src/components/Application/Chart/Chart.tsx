import * as React from "react";
import "./Chart.less";
import { PopUp, PopUpProps } from "./PopUp/PopUp";
import { useState } from "react";

export const Chart = () => {
	const [click, setClick] = useState(false);
	const [person, setPerson] = useState<PopUpProps | null>(null);

	const toggleClick = (props: PopUpProps) => {
		setClick(true);
		setPerson(props);
	};
	const removeClick = () => {
		setPerson(null);
		setClick(false);
	};

	return (
		<div className="Chart">
			<img src={"./src/images/map/ales_title.jpg"} alt={"ales"} className={"Chart__image"} />
		</div>
	);
};
