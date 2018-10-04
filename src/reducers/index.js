 const todos = (state = [], action)=>{
	switch(action.type){
		case "ADD_BLOCK":
			return [
				...state,
				action.elem
			];
		case "REMOVE_BLOCK":
			return state.filter(element => element !== action.elem)
		default:
			return state;
	}
}

export default todos