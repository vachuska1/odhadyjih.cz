import * as React from "react";
import "./PopUp.less";

export interface PopUpProps {
	name: string;
	email: string;
	tel: string;
	area: string;
	photo: string;
	classname: string;
}

export const PopUp: React.FC<PopUpProps> = ({ name, email, tel, area, photo, classname }) => {
	return (
		<div className="PopUp">
			<div className="PopUp__Border">
				<div className="PopUp__Content">
					<img className={`PopUp__Area PopUp__Area--${classname}`} src={area} alt="jihočeské oblasti" />
					<div className="PopUp__Desc">
						<li className="PopUp__Name">{name}</li>
						<li className="PopUp__Tel">{tel}</li>
						<li className="PopUp__Email">{email}</li>
					</div>
					<img className="PopUp__Photo" src={photo} alt="náš tým" />
				</div>
			</div>
		</div>
	);
};
