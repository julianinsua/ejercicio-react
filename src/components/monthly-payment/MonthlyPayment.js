import React, { useCallback } from "react";
import classes from "./MonthlyPayment.module.css";

export const MonthlyPayment = (props) => {
	const formatter = new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 2,
	});

	const moneyPerMonth = useCallback(
		(total, terms, interest) => {
			const totalOwed = total * (1 + interest);
			return formatter.format(totalOwed / terms);
		},
		[props.total, props.terms]
	);
	return (
		<div className={classes.Container}>
			<h3>CUOTA FIJA POR MES</h3>
			<h2>{moneyPerMonth(props.total, props.term, 0)}</h2>
		</div>
	);
};
