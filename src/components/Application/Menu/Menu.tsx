import * as React from "react";
import "./Menu.less";

export const Menu = () => {
	return (
		<div className={"menu"}>
			<div className={"menu__left"}>apartmány krátká</div>
			<div className={"menu__right"}>
				<div className={"menu__element"}>Fotogalerie</div>
				<div className={"menu__element"}>Informace</div>
				<div className={"menu__element"}>Mapa</div>
				<div className={"menu__element"}>Kontakt</div>
			</div>
		</div>
	);
};
