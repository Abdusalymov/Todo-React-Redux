 export const todos = (state= [], action)=>{
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


export const todo = (state= [], action)=>{
	switch(action.type){
		case "ADD_TODO":
			return[
				...state,
				action.elem
			]
		case "REMOVE_ADD":
			return state.filter(element => element !== action.elem)
		default:
			return state;
	}
}
