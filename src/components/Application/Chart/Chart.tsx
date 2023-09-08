import * as React from "react";
import { useState, useEffect } from "react";
import "./Chart.less";

export const Chart = () => {
	const [mobile, setMobile] = useState<boolean>(false);

	useEffect(() => {
		getPhoneDeviceContent();
	}, []);

	const getPhoneDeviceContent = () => {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			setMobile(true);
		}
	};

	const sendEmailOnMailIcon = () => {
		console.log("ano");
		window.location.href = "mail:odhadyvachuska@gmail.com?subject=fix";
	};

	return (
		<div className="Chart">
			{mobile && <a className="Chart__mobile" href="tel:774189395" />}
			<img src={"./src/images/map/ales_title.jpg"} alt={"ales"} className={"Chart__image"} />
			<a className="Chart__email" href="mailto:odhadyvachuska@gmail.com?Subject=dotaz" />
		</div>
	);
};
