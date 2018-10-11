 export const todos = (state= [], action)=>{
	switch(action.type){
		case "ADD_BLOCK":
			return [
				...state,
				{	
					id: action.elem,
					name: action.name,
					child: []
				}
			];
		case "REMOVE_BLOCK":
			return state.filter(element => element.id !== action.elem.id)
		case "ADD_CHILD":
		return state.map((item) => {
			return item.id === action.parentId ? Object.assign({}, item, {
				child: [...item.child, {id: action.childId}]
			}) : item;
		});
		case "REMOVE_TODO":
			return state.filter(element => {
				if(element.id === action.parentId){
					element.child.splice(action.childId, 1);
				}
				return element;
			});
		case "ADD_NAMEBLOCK":
			return state.filter(elem => {
				if(elem.id === action.parentId){
					elem.name = action.name;
				}
				return elem;
			})
		case "ADD_NAMETODO":
		return state.filter(elem => {
			if(elem.id === action.parentId){
				elem.child.map(item => {
					if(item.id === action.childId){
						item.name = action.name;
					}
					return item;
				})
			}
			return elem;
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
