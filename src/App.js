import React from "react";
import { Calculator } from "./components/calculator/Calculator";
import classes from "./App.module.css";

export const App = () => {
	return (
		<div className={classes.App}>
			<Calculator />
		</div>
	);
};
