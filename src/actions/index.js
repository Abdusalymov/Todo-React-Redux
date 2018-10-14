export function addBlock(id) {
  return {
    type: "ADD_BLOCK",
    blocks: id
  }
}

export function removeBlock(id){
	return{
		type: "REMOVE_BLOCK",
		blockId: id
	}	
}

export function addNameOfBlock(blockId, name){
	return{
		type: "ADD_NAMEBLOCK",
		blockName: name,
		blockId: blockId
	}
}

export function todoRemove(todoId){
	return{
		type: "REMOVE_TODO",
		todoId: todoId
	}
}

export function todoAdd(todoId, blockId){
	return{
		type: "ADD_TODO",
		todoId: todoId,
		blockId: blockId
	}
}

export function addNameOfTodo(todoId, todoName){
	return{
		type: "ADD_NAMETODO",
		todoName: todoName,
		todoId: todoId,
	}
}

export function addSubTodo(todoId, subTodoId){
	return{
		type: "ADD_SUBTODO",
		todoId: todoId,
		subTodoId: subTodoId
	}
}

export function removeSubTodo(subTodoId){
	return{
		type: "REMOVE_SUBTODO",
		subTodoId: subTodoId
	}
}


export function addNameSubTodo(subTodoId, value){
	return{
		type: "ADD_NAMESUBTODO",
		subTodoId: subTodoId,
		subTodoName: value
	}
}

export function toggleVisibility(blockId, textBtn, style){
	return{
		type: "VISIBILITY",
		blockId: blockId,
		textBtn: textBtn,
		display: style
	}
}