import React, { useEffect, useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('mounted');
		console.log(count)

		return () => {
			console.log('un mounted')
		}
	}, [])
	console.log("render")
	return (
		<div className="App">
			<h1>useEffect test</h1>
			<p>{`count: ${count}`}</p>
			<button onClick={() => { setCount(count + 1) }}>버튼</button>
		</div>
	);
}

export default App;
