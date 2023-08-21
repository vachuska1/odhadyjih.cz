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
import { Input } from "./Input/Input";

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
				<Who lang={lang} />
				<IntroCont />
				<Howdo lang={lang} />
				<Input lang={lang} />
				<PhotogalleryTextContent lang={lang} />
			</div>
			<MapWindow lang={lang} />
			<Footer lang={lang} />
		</>
	);
};
