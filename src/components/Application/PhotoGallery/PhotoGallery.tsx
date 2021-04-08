import * as React from "react";
import { useEffect, useState } from "react";
import "./PhotoGallery.less";

export const PhotoGallery = () => {
	let left = 0;
	const oneStep = 300;
	const [leftRight, setLeftRight] = useState<boolean>(false);
	const [restStep, setRestStep] = useState<number>(0);
	const [step, setStep] = useState<number>(0);
	const [stepRight, setStepRight] = useState<boolean>(true);
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		if (counter > 0) {
			const photoGallery = document.getElementById("gallery")!;
			if (leftRight) {
				if (restStep !== 0) {
					photoGallery.animate(
						[
							{
								left: "-" + ((step - 1) * oneStep).toString() + "px",
								easing: "ease-in",
							},
							{
								left: "-" + (step * oneStep - (oneStep - restStep)).toString() + "px",
								easing: "ease-out",
							},
						],
						{
							duration: 200,
							fill: "forwards",
						},
					);
				} else {
					photoGallery.animate(
						[
							{
								left: "-" + ((step - 1) * oneStep).toString() + "px",
								easing: "ease-in",
							},
							{
								left: "-" + (step * oneStep).toString() + "px",
								easing: "ease-out",
							},
						],
						{
							duration: 200,
							fill: "forwards",
						},
					);
				}
			} else {
				photoGallery.animate(
					[
						{
							left: photoGallery.style.left,
							easing: "ease-in",
						},
						{
							left: "-" + (step * oneStep).toString() + "px",
							easing: "ease-out",
						},
					],
					{
						duration: 200,
						fill: "forwards",
					},
				);
			}
		}
	}, [step, counter, restStep, left, leftRight]);

	const scrollOverRight = () => {
		const photoGallery = document.getElementById("gallery")!;
		const windowWidth = window.innerWidth;
		const galleryWidth = photoGallery.offsetWidth;
		const actualSteps = Math.floor((galleryWidth - windowWidth) / oneStep);
		setCounter(counter + 1);
		setStep(step + 1);
		setStepRight(true);
		if (step === actualSteps) {
			setRestStep((galleryWidth - windowWidth) % oneStep);
			setStepRight(false);
		}
		setLeftRight(true);
	};

	const scrollOverLeft = () => {
		setStepRight(true);
		if (restStep !== 0) {
			setCounter(counter + 1);
			setRestStep(0);
			setStep(step - 1);
		} else {
			setCounter(counter + 1);
			setStep(step - 1);
		}
		setLeftRight(false);
	};

	return (
		<div id={"photoGalleryBlock"} className={"photoGalleryBlock"}>
			<div id={"photoGallery"} className={"photoGallery"}>
				<div id={"gallery"} className={"gallery"}>
					<div>
						<img src={"./src/images/photogallery/photo_1.jpg"} alt={"image1"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_2.jpg"} alt={"image2"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_3.jpg"} alt={"image3"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_4.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_5.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_6.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_7.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_8.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_9.jpg"} alt={"image4"} />
					</div>
					<div>
						<img src={"./src/images/photogallery/photo_10.jpg"} alt={"image4"} />
					</div>
				</div>
			</div>
			{step > 0 ? (
				<div className={"photoButton photoButton--left"}>
					<div className={"photoScroll photoScroll--left"} onClick={scrollOverLeft} />
				</div>
			) : null}
			{stepRight ? (
				<div className={"photoButton photoButton--right"}>
					<div className={"photoScroll photoScroll--right"} onClick={scrollOverRight} />
				</div>
			) : null}
		</div>
	);
};
