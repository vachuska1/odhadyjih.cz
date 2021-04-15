import { TextAppartmentInterface } from "./TextAppartmentInterface";

export interface TextsInterface {
	heading: string;
	location1: string;
	location2: string;
	gastronomy: string;
	nearby: string;
	appartments: Array<TextAppartmentInterface>;
}
