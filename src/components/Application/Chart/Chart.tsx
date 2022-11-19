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
			<div className={`Chart__Off ${click ? "Chart__Off--active" : "Chart__Off"}`} onClick={removeClick}>
				✖{" "}
			</div>
			<img
				className={`Chart__Big ${click ? "Chart__Big--active" : "Chart__Big"}`}
				src="./src/images/map/jihoceskyAllTown.svg"
			/>
			<img
				className={`Chart__KarelPhoto" ${click ? "Chart__KarelPhoto--active" : "Chart__KarelPhoto"} }`}
				src="./src/images/people/karel.png"
				onClick={() =>
					toggleClick({
						email: "info@odhadyjiznicechy.cz",
						tel: "774 104 020",
						name: "Ing. Karel Bruha",
						photo: "./src/images/people/karel.png",
						area: "./src/images/map/JihoceskyKarel.svg",
						classname: "Karel",
					})
				}
			/>
			<img
				className={`Chart__NatkaPhoto" ${click ? "Chart__NatkaPhoto--active" : "Chart__NatkaPhoto"} }`}
				src="./src/images/people/natka.png"
				onClick={() =>
					toggleClick({
						email: "info@odhadyjiznicechy.cz",
						tel: "774 104 020",
						name: "Ing. Natálie Jurdová",
						photo: "./src/images/people/natka.png",
						area: "./src/images/map/JihoceskyNatka2.svg",
						classname: "Natka",
					})
				}
			/>
			<div
				className={`Chart__Natkanonactive ${click ? "Chart__Natkanonactive--active" : "Chart__Natkanonactive"}`}
			></div>
			{/* <img className="Chart__Ales" src="./src/images/map/jihoceskyAles.svg" />
			<img className="Chart__Natka" src="./src/images/map/jihoceskyNatka.svg" />
			<img className="Chart__Karel" src="./src/images/map/jihoceskyKarel.svg" /> */}
			{person && <PopUp {...person} />}
		</div>
	);
};
