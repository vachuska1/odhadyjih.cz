import * as React from "react";
import "./Map.less";

export const Map = () => {
	return (
		<div className="map">
			<iframe
				width="100%"
				height="100%"
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=Klatovsk%C3%A1%20t%C5%99%C3%ADda%207%2C%20Plzen&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameBorder="0"
				scrolling="no"
			/>
		</div>
	);
};
