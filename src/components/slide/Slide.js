import React, { useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import classes from "./Slide.module.css";

export const Slide = (props) => {
	const formatter = new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 2,
	});

	const minimum = props.isMoney ? formatter.format(props.min) : props.min;
	const maximum = props.isMoney ? formatter.format(props.min) : props.max;

	useEffect(() => {
		if (props.value > props.max || props.value < props.min) {
			window.alert(`El rango debe ser de entre: ${props.min} y ${props.max}.`);
			props.changeHandler(props.min);
		}
	}, [props.max, props.min, props.value]);

	return (
		<div className={classes.Container}>
			<div className={classes.Header}>
				<h2>{props.title}</h2>
				<input
					type='number'
					min={props.min}
					max={props.max}
					value={props.value}
					onChange={(event) => props.changeHandler(event.target.value)}
				/>
			</div>
			<Slider
				min={props.min}
				max={props.max}
				defaultValue={props.min}
				trackStyle={{ backgroundColor: "white", height: 5 }}
				handleStyle={{
					borderColor: "white",
					height: 15,
					width: 15,
					marginTop: -5,
					backgroundColor: "white",
				}}
				railStyle={{ backgroundColor: "white", height: 5 }}
				onChange={(value) => props.changeHandler(value)}
				value={props.value}
			/>
			<div className={classes.Caption}>
				<span>{minimum}</span>
				<span>{maximum}</span>
			</div>
		</div>
	);
};
