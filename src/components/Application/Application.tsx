import * as React from "react";
import { Menu } from "./Menu/Menu";
import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { TextWindow } from "./TextWindow/TextWindow";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

export const Application = () => {
	return (
		<>
			<Menu />
			<PhotoGallery />
			<TextWindow />
			<Map />
			<Footer />
		</>
	);
};
