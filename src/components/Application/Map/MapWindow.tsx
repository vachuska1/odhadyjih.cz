import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "./MapWindow.less";
import { HowdoProps } from "../Howdo/Howdo";

const defaultLatLng: LatLngTuple = [48.97638, 14.47353];

export const MapWindow = (props: HowdoProps) => {
	const initMarker = (ref) => {
		if (ref) {
			ref.leafletElement.openPopup();
		}
	};
	return (
		<>
			<div className="Where">{props.lang === "cs" ? "Kde nás najdete?" : "Where to find us?"}</div>
			<div id={"mapCont"} className={"mapCont"}>
				<Map className="map" zoom={16} center={defaultLatLng} scrollWheelZoom={true}>
					<TileLayer
						attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
						url="https://api.mapbox.com/styles/v1/vachuska1/cl3kde0qf003k14mltt7qgn0t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFjaHVza2ExIiwiYSI6ImNsM2s3c2M1NzBjcm8zaXF3OWs1OXIxdXgifQ.wURtYB6CFUhnILLSH3sXAg"
					/>
					<Marker position={defaultLatLng} ref={initMarker}>
						<Popup className={"popUp"} open={true}>
							Krajinská 244/17, 370 01 České Budějovice
						</Popup>
					</Marker>
				</Map>
			</div>
		</>
	);
};
