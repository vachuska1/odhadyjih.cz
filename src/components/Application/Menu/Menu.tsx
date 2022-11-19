import * as React from "react";
import "./Menu.less";

interface MenuProps {
	lang: string;
	changeLang: (lang) => void;
}

export const Menu: React.FC<MenuProps> = (props) => {
	const scrollToPosition = (topPosition: number, offsetAnimation: number) => {
		const actualPosition = topPosition - offsetAnimation;
		window.scrollTo({
			top: actualPosition,
			behavior: "smooth",
		});
	};

	const handleSlidePart = (event) => {
		if (window.innerWidth < 900) {
			let offsetAnimation = 80;
			if (event === 0) {
				scrollToPosition(0, offsetAnimation);
			}
			if (event === 1) {
				const fifthPart = document.getElementById("photoGalleryBlock")!;
				const topPosition = fifthPart.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 2) {
				const prizeList = document.getElementById("textWindow")!;
				const topPosition = prizeList.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 3) {
				const gallery = document.getElementById("mapCont")!;
				const topPosition = gallery.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 4) {
				const footer = document.getElementById("footer")!;
				const topPosition = footer.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			const menu = document.getElementById("menu__right")!;
			menu.classList.remove("menu__right--active");
		} else {
			let offsetAnimation = 80;
			if (event === 0) {
				scrollToPosition(0, offsetAnimation);
			}
			if (event === 1) {
				const fifthPart = document.getElementById("photoGalleryBlock")!;
				const topPosition = fifthPart.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 2) {
				const prizeList = document.getElementById("textWindow")!;
				const topPosition = prizeList.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 3) {
				const gallery = document.getElementById("mapCont")!;
				const topPosition = gallery.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
			if (event === 4) {
				const footer = document.getElementById("footer")!;
				const topPosition = footer.offsetTop;
				scrollToPosition(topPosition, offsetAnimation);
			}
		}
	};

	const openMobileMenu = () => {
		const menu = document.getElementById("menu__right")!;
		if (menu.classList.contains("menu__right--active")) {
			menu.classList.remove("menu__right--active");
		} else {
			menu.classList.add("menu__right--active");
		}
		const mobileMenu = document.getElementById("menu__mobile")!;
		if (mobileMenu.classList.contains("menu__mobile--open")) {
			mobileMenu.classList.remove("menu__mobile--open");
			mobileMenu.classList.add("menu__mobile--close");
		} else {
			mobileMenu.classList.remove("menu__mobile--close");
			mobileMenu.classList.add("menu__mobile--open");
		}
	};

	return (
		<div className={"menu"}>
			<div className={"menu__left"}>
				<div className={"menu__logo"}>
					{props.lang === "cs" ? "Odhady Jižní Čechy" : "South Bohemia Estimates"}
				</div>
				<div id={"menu__mobile"} className={"menu__mobile"} onClick={openMobileMenu} />
				<div
					className={`menu__lang ${props.lang === "cs" ? "menu__lang--en" : "menu__lang--cs"}`}
					onClick={() => props.changeLang(props.lang === "cs" ? "en" : "cs")}
				/>
			</div>
			<div id={"menu__right"} className={"menu__right"}>
				<div
					className={"menu__element"}
					onClick={() => {
						handleSlidePart(2);
					}}
				>
					{props.lang === "cs" ? "Úvod" : "Introduction"}
				</div>
				<div
					className={"menu__element"}
					onClick={() => {
						handleSlidePart(3);
					}}
				>
					{props.lang === "cs" ? "O nás" : "About us"}
				</div>
				<div
					className={"menu__element"}
					onClick={() => {
						handleSlidePart(4);
					}}
				>
					{props.lang === "cs" ? "Služby" : "Services"}
				</div>
				<div
					className={"menu__element"}
					onClick={() => {
						handleSlidePart(5);
					}}
				>
					{props.lang === "cs" ? "Kontakt" : "Contact"}
				</div>
				<div
					className={`menu__element menu__element--lang ${
						props.lang === "cs" ? "menu__element--lang-en" : "menu__element--lang-cs"
					}`}
					onClick={() => props.changeLang(props.lang === "cs" ? "en" : "cs")}
				/>
			</div>
		</div>
	);
};
