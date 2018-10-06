 export const todos = (state= [], action)=>{
	switch(action.type){
		case "ADD_BLOCK":
			return [
				...state,
				{	
					id: action.elem,
					child: []
				}
			];
		case "REMOVE_BLOCK":
			return state.filter(element => element.id !== action.elem.id)
		case "ADD_CHILD":
		return state.map((item)=> {
			// let array;
			// if(item.id === action.parentId) {
			// 	 array = Object.assign({}, item, {
			// 		child: [...item.child, action.childId ]
			// 	})
			// }
			// return array;

			return item.id === action.parentId ? Object.assign({}, item, {
																	child: [...item.child, action.childId ]
																		}) : item;
		})
		default:
			return state;
	}
}


// export const todo = (state= [], action)=>{
// 	switch(action.type){
// 		case "ADD_TODO":
// 			return 	todos(undefined, action)
			
// 		case "REMOVE_ADD":
// 			return state.filter(element => element !== action.elem)
// 		default:
// 			return state;
// 	}
// }
