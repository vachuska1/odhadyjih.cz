import * as React from "react";
import "../Whoare/WhoAre.less";
import { useState } from "react";

interface WhoAreProps {
	classname: string;
	desc: string;
	desctwo: string;
	///image: string;
}

export const WhoAre: React.FC<WhoAreProps> = ({ classname, desc, desctwo }) => {
	const [click, setClick] = useState(false);

	const toggleClick = () => {
		setClick(!click);
	};

	return (
		<div className={"WhoAre"} onClick={toggleClick}>
			<div className={classname}>
				<p className={`WhoAre__Desc ${click ? "WhoAre__Desc--active" : "WhoAre__Desc"}`}>
					{desc}
					<br />
					{desctwo}
				</p>
			</div>
		</div>
	);
};
