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
					<div className={"textBlock__subHeading"}>{texts.texts.heading}</div>
					<div className={"textBlock__subText"}>{texts.texts.mainInfo}</div>
					<div className={"textBlock__subText"}>{texts.texts.info1}</div>
					<div className={"textBlock__subText"}>{texts.texts.info2}</div>
					<div className={"textBlock__subText"}>{texts.texts.info3}</div>
					<div className={"textBlock__subText"}>{texts.texts.info4}</div>
					<div className={"textBlock__subText"}>{texts.texts.info5}</div>
					<div className={"textBlock__subText"}>{texts.texts.info6}</div>
				</div>
			</div>
		</div>
	);
};
