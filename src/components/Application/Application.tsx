import * as React from "react";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { TextWindow } from "./TextWindow/TextWindow";
import { MapWindow } from "./Map/MapWindow";
import { Footer } from "./Footer/Footer";

export const Application = () => {
	const [lang, setLang] = useState("cs");

	return (
		<>
			<Menu lang={lang} changeLang={(event) => setLang(event)} />
			<PhotoGallery />
			<TextWindow lang={lang} />
			<MapWindow />
			<Footer lang={lang} />
		</>
	);
};
