import * as React from "react";
import "./IntroCont.less";
import { WhoAre } from "./Whoare/WhoAre";

export const IntroCont = () => {
	return (
		<div className="IntroCont">
			<div className="IntroCont__Round">
				<WhoAre
					classname="IntroCont__Image IntroCont__ImageKarel"
					desc="Ing. Karel Brůha"
					desctwo="606 523 667"
				/>
			</div>
			<div className="IntroCont__Round">
				<WhoAre
					classname="IntroCont__Image IntroCont__ImageNatka"
					desc="Ing. Natálie Jurdová"
					desctwo="727 838 131"
				/>
			</div>
			<div className="IntroCont__Round">
				<WhoAre
					classname="IntroCont__Image IntroCont__ImageAles"
					desc="Ing. Aleš Vachuška"
					desctwo="774 104 020"
				/>
			</div>
		</div>
	);
};
