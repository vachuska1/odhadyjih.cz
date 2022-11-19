import * as React from "react";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { MapWindow } from "./Map/MapWindow";
import { Footer } from "./Footer/Footer";
import { PhotogalleryTextContent } from "./PhotogalleryTextContent/PhotogalleryTextContent";
import { TextWindow } from "./TextWindow/TextWindow";
import { Chart } from "./Chart/Chart";
import { Howdo } from "./Howdo/Howdo";
import { IntroCont } from "./Company/IntroCont";
import { Who } from "./Company/Who/Who";

export const Application = () => {
	const [lang, setLang] = useState(
		localStorage.getItem("lang") === null ? "cs" : localStorage.getItem("lang")!.toString(),
	);

	const changeLang = (event) => {
		setLang(event);
		localStorage.setItem("lang", event.toString());
	};

	return (
		<>
			<Menu lang={lang} changeLang={(event) => changeLang(event)} />
			<div id={"textWindow"}>
				<Chart />
				<TextWindow lang={lang} />
				<Howdo lang={lang} />
				<Who lang={lang} />
				<IntroCont />
				<PhotogalleryTextContent lang={lang} />
			</div>
			<MapWindow />
			<Footer lang={lang} />
		</>
	);
};
