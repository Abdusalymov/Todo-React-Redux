export const blocks = (state=[], action)=>{
	 
	switch(action.type){

		case "ADD_BLOCK":
			return [
				...state,
				{
					id: action.blocks, 
					visibility: 'block',
					textBtn: "CLOSE"
				}
			];

		case "REMOVE_BLOCK":
			return state.filter(item => item.id !== action.blockId);

		case "ADD_NAMEBLOCK":
			return state.map((item)=>{
			
				if(item.id === action.blockId){
					return	Object.assign({}, item, {
						blockName: action.blockName 
					})
				}
				return item;
			});

		case "VISIBILITY":
			return state.filter(elem =>{
				
				if(elem.id === action.blockId){
					elem.visibility = action.display === 'none' ? 'block' : 'none';
					elem.textBtn = action.textBtn === "OPEN" ? "CLOSE" : "OPEN";
				}
				return elem;

			});

		default:
			return state;
	}
}

export const todos = (state=[], action) =>{
	switch(action.type){

		case "ADD_TODO":
			return [
				...state,
				{
					blockId: action.blockId, 
					id: action.todoId, 
				}
			]

		case "REMOVE_TODO":
			return state.filter(item => item.id !== action.todoId);	

		case "ADD_NAMETODO":
		return state.map((item)=>{
			
			if(item.id === action.todoId){
				return	Object.assign({}, item, {
					todoName: action.todoName 
				})
			}
			return item;
		});

		default:
			return state;
	}
}

export const subTodos = (state=[], action)=>{

	switch(action.type){

		case "ADD_SUBTODO":
			return [
				...state,
				{
					todoId: action.todoId,
					subTodoId: action.subTodoId
				}
			]

		case "REMOVE_SUBTODO":
			return state.filter(item => item.subTodoId !== action.subTodoId);

		case "ADD_NAMESUBTODO":
			return state.map((item)=>{
			
				if(item.subTodoId === action.subTodoId){
					return	Object.assign({}, item, {
						subTodoName: action.subTodoName 
					})
				}
				return item;
			});

		default:
			return state;
	} 
}