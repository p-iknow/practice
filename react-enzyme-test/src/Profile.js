import React from 'react';

function Profie({ userName, name }) {
	return (
		<div>
			<b>{userName}</b>
			<span>({name})</span>
		</div>
	);
}

export default Profie;
