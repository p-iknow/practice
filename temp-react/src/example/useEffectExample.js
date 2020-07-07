import React, { useState, useEffect } from 'react';

const makeApiWithValue = (value) => new Promise(resolve => {
	setTimeout(() => resolve(value), 500)
})

const getCount = makeApiWithValue(2);
function useEffectExample() {

	const [count, setCount] = useState(0);

	const fetchCount = async () => {
		const res = await getCount();

	}
	useEffect(() => {

	})

	return (
		<div>
			<h1>useEffect test</h1>
			<p>{`카운트 : ${count}`}</p>
		</div>
	);
}

export default useEffectExample;
