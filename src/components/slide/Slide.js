import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import classes from "./Slider.module.css";

export const Slide = (props) => {
	return (
		<div>
			<Slider min={props.min} max={props.max} defaultValue={3} />
		</div>
	);
};
