import React, { useState } from "react";
import { MonthlyPayment } from "../monthly-payment/MonthlyPayment";
import { Slide } from "../slide/Slide";
import classes from "./Calculator.module.css";

export const Calculator = () => {
	const [total, setTotal] = useState(5000);
	const [term, setTerm] = useState(3);

	return (
		<div className={classes.Container}>
			<h1>Simulá tu crédito</h1>
			<Slide
				title='MONTO TOTAL'
				min={5000}
				max={50000}
				value={total}
				changeHandler={setTotal}
				isMoney
			/>
			<Slide
				title='PLAZO'
				min={3}
				max={24}
				value={term}
				changeHandler={setTerm}
			/>
			<MonthlyPayment total={total} term={term} />
			<div className={classes.Buttons}>
				<button className={classes.Buttons__Credit}>OBTENÉ CRÉDITO</button>
				<button className={classes.Buttons__Details}>
					VER DETALLE DE CUOTAS
				</button>
			</div>
		</div>
	);
};
