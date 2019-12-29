import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ClassExam, FunctionExam, Conditional } from "./exam";

function App() {
	return (
		<div className="App">
			{/* <FunctionExam />
			<ClassExam /> */}
			<Conditional />
		</div>
	);
}

export default App;
