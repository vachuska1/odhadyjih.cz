import * as React from "react";
import "./Chart.less";
import { PopUp, PopUpProps } from "./PopUp/PopUp";
import { useState, useEffect } from "react";

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
		<div className={`Chart ${click ? "Chart--active" : "Chart"}`}>
			<div className={`Chart__Off ${click ? "Chart__Off--active" : "Chart__Off"}`} onClick={removeClick}>
				✖{" "}
			</div>
			<img
				className={`Chart__Big ${click ? "Chart__Big--active" : "Chart__Big"}`}
				src="./src/images/map/jihoceskyAllTown.svg"
			/>
			<img
				className={`Chart__AlesPhoto" ${click ? "Chart__AlesPhoto--active" : "Chart__AlesPhoto"} }`}
				src="./src/images/people/alesvachuska.png"
				onClick={() =>
					toggleClick({
						email: "info@odhadyjiznicechy.cz",
						tel: "774 104 020",
						name: "Ing. Aleš Vachuška",
						photo: "./src/images/people/alesvachuska.png",
						area: "./src/images/map/jihoceskyAles.svg",
						classname: "Ales",
					})
				}
			/>
			<img
				className={`Chart__KarelPhoto" ${click ? "Chart__KarelPhoto--active" : "Chart__KarelPhoto"} }`}
				src="./src/images/people/karel.png"
				onClick={() =>
					toggleClick({
						email: "info@odhadyjiznicechy.cz",
						tel: "606 523 667",
						name: "Ing. Karel Bruha",
						photo: "./src/images/people/karel.png",
						area: "./src/images/map/jihoceskyKarel.svg",
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
						tel: "727 838 131",
						name: "Ing. Natálie Jurdová",
						photo: "./src/images/people/natka.png",
						area: "./src/images/map/jihoceskyNatka2.svg",
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
