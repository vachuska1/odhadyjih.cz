import * as React from "react";
import "./IntroCont.less";
import { WhoAre } from "./Whoare/WhoAre";

export const IntroCont = () => {
	return (
		<div className="IntroCont">
			<div className="IntroCont__Round">
				<WhoAre
					classname="IntroCont__Image IntroCont__ImageAles"
					desc="Ing. Aleš Vachuška"
					desctwo="774 189 395"
				/>
			</div>
		</div>
	);
};
