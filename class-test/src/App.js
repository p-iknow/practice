import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassExam from "./ClassExam";
import FunctionExam from "./FunctionExam";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<img
					src="https://res.tutoring.co.kr/res/images/evt/202001/05_img_care.png"
					alt=""
				/>
			</header>
			<FunctionExam />
			<ClassExam />
		</div>
	);
}

export default App;
