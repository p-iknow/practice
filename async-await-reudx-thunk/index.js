let a;

const getUserInfo = ( ) => {
	return  async (dispatch) => {
		await new Promise((resolve) => setTimeout(()=>{ a = 2; resolve();}, 1000)).then(res => {
		dispatch(a);
	})
	}
};

const storeDispatch = async(callback) => {
	const dispatch = (a) => {
		console.log(`dispatch ${a}`)
	}
	await callback(dispatch);
	return "1";
};

const _initUserInfo = () => {
	return storeDispatch(getUserInfo())
}

const initConfig = async () => {
	await _initUserInfo();
}

const componentDidMount = async () => {
	await initConfig().then(res => console.log(`didMount ${res}`));
 }


const b = componentDidMount();
console.log(a);

// async componentDidMount > async initConfig > _initUserInfo > getUserInfo => return async