import * as React from "react";
import "./PhotoGallery.less";

export const PhotoGallery = () => {
	const scrollOverWindow = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	const scrollOverRight = () => {
		const photoGallery = document.getElementById("photoGallery")!;
		photoGallery.style.left = "-" + window.innerWidth.toString() + "px";
	};

	const scrollOverLeft = () => {};

	return (
		<div className={"photoGalleryBlock"}>
			<div id={"photoGallery"} className={"photoGallery"}>
				<div>
					<img src={"./src/images/photogallery/photogallery1.jpeg"} alt={"image1"} />
				</div>
				<div>
					<img src={"./src/images/photogallery/photogallery2.jpeg"} alt={"image2"} />
				</div>
				<div>
					<img src={"./src/images/photogallery/photogallery3.jpeg"} alt={"image3"} />
				</div>
				<div>
					<img src={"./src/images/photogallery/photogallery4.jpeg"} alt={"image4"} />
				</div>
			</div>
			<div className={"photoScroll photoScroll--bottom"} onClick={scrollOverWindow} />
			<div className={"photoScroll photoScroll--right"} onClick={scrollOverRight} />
			<div className={"photoScroll photoScroll--left"} onClick={scrollOverLeft} />
		</div>
	);
};
