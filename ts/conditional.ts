/*
 Item<T> - T 에 따라 달라지는 container
*/

interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}

type Item1<T> = {
  id: T,
  container: any;
};

const item1: Item1<string> = {
  id: "aaaaaa",
  container: null
};

/*
 Item<T> T 가 string 이면 StringContainer, 아니면 NumberContainer
*/

type Item2<T> = {
  id: T;
  container: T extends string ? StringContainer : NumberContainer;
};

const item2: Item2<string> = {
  id: 'aaaaaa',
  container: null, // Type 'null' is not assignable to type 'StringContainer'.
};


const item2Right: Item2<string> = {
  id: 'aaaaaa',
  container: {
		value: "value",
		format(){return "format"},
		split(){ return ["split", "split"]}
	}
};


/*
Item<T>
T 가 string 이면 StringContainer
T 가 number 면 NumberContainer
아니면 사용 불가
*/

type Item3<T> = {
  id: T extends string | number ? T : never;
  container: T extends string
    ? StringContainer
    : T extends number
    ? NumberContainer
    : never;
};

const item3: Item3<boolean> = {
  id: true, // Type 'boolean' is not assignable to type 'never'.
  container: null, // Type 'null' is not assignable to type 'never'.
};


/* ArrayFilter<T> */

/*
T extends any[] ? 의미는 T가 배열타입인지를 검사하는 것임
*/
type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

/*
conditional 이 type 이 연산되는 과정
*/

// 1. string | number | string[] | number[]
// 2. never | never | string[] | number[]
// 3. string[] | number[]


/*
 generic 선언부에 제약 걸기
*/

interface Table {
  id: string;
  chairs: string[];
}

interface Dino {
  id: number;
  legs: number;
}

interface World {
	// 아래 T extends string | number 가 바로 제약을 거는 것이라고 볼 수 있음
  getItem<T extends string | number>(id: T): T extends string ? Table : Dino;
}

const world: World = null as any;

const dino = world.getItem(10);
const what = world.getItem(true); // Error! Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)
