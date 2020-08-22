const sum = (a, b) => {
	return a + b;
};

const sumOf = numbers => {
	return numbers.reduce((acc, prev) => acc + prev, 0);
};

exports.sum = sum;
exports.sumOf = sumOf;
