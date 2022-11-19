import * as React from "react";
import { TextAppartmentInterface } from "../TextWindow/TextAppartmentInterface";

interface PhotogalleryTextProps {
	texts: TextAppartmentInterface;
	index: number;
}

export const PhotogalleryText: React.FC<PhotogalleryTextProps> = (texts, index) => {
	return (
		<div className={"textWindow"}>
			<div className={"textBlock"}>
				<div className={"textBlock__appartment"}>
				</div>
			</div>
		</div>
	);
};
