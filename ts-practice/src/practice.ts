function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

function returnNothing(): void {
  console.log("I am just saying hello world");
}
