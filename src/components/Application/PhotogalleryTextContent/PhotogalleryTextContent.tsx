import * as React from "react";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";
import { PhotogalleryTextContentInfoCS, PhotogalleryTextContentInfoEN } from "./PhotogalleryTextContentInfo";
import { PhotogalleryTextContentInfoType } from "./PhotogalleryTextContentInfoType";

interface PhotogalleryTextContentProps {
	lang: string;
}

export const PhotogalleryTextContent: React.FC<PhotogalleryTextContentProps> = ({ lang }) => {
	const fileToLoad: Array<PhotogalleryTextContentInfoType> =
		lang === "cs" ? PhotogalleryTextContentInfoCS : PhotogalleryTextContentInfoEN;

	return (
		<>
			{fileToLoad.map((appartment, index) => {
				return (
					<>
						<PhotoGallery photos={appartment.photogalleryInfo} index={index} />;
					</>
				);
			})}
		</>
	);
};
