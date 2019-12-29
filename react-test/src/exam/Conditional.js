import React, { useState } from "react";

const Conditional = () => {
	const [folded, setFolded] = useState(true);
	const onClickFolded = () => setFolded(!folded);

	return <div onClick={onClickFolded}>{folded ? "닫힘" : "열림"}</div>;
};

export default Conditional;
