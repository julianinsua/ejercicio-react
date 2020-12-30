import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import classes from "./Slider.module.css";

export const Slide = (props) => {
	const formatter = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	const minimum = props.isMoney ? formatter.format(props.min) : props.min;
	const maximum = props.isMoney ? formatter.format(props.min) : props.max;

	return (
		<div>
			<h2>{props.title}</h2>
			<input
				value={props.value}
				onChange={(event) => props.changeHandler(event.target.value)}
			/>
			<Slider
				min={props.min}
				max={props.max}
				defaultValue={props.min}
				trackStyle={{ backgroundColor: "white", height: 5 }}
				handleStyle={{
					borderColor: "white",
					height: 15,
					width: 15,
					marginLeft: -14,
					marginTop: -5,
					backgroundColor: "white",
				}}
				railStyle={{ backgroundColor: "white", height: 5 }}
				onChange={(value) => props.changeHandler(value)}
				value={props.value}
			/>
			<div>
				<span>{minimum}</span>
				<span>{maximum}</span>
			</div>
		</div>
	);
};
