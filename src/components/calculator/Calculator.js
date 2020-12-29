import React, { useState } from "react";
import { MonthlyPayment } from "../monthly-payment/MonthlyPayment";
import { Slide } from "../slide/Slide";
import classes from "./Calculator.module.css";

export const Calculator = () => {
	const [total, setTotal] = useState(5000);
	const [term, setTerm] = useState(3);

	return (
		<div>
			<h1>Simulá tu crédito</h1>
			<Slide min={5000} max={50000} />
			<Slide min={3} max={24} />
			<MonthlyPayment total={total} term={term} />
			<div>
				<button>OBTENÉ CRÉDITO</button>
				<button>VER DETALLE DE CUOTAS</button>
			</div>
		</div>
	);
};
