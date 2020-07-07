import React, { useEffect, useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log(count)
	}, [])

	return (
		<div className="App">
			<h1>useEffect test</h1>
			<p>{`count: ${count}`}</p>
			<button onClick={() => { setCount(count + 1) }}>버튼</button>
		</div>
	);
}

export default App;
