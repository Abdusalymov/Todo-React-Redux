export function Add(id) {
  return {
    type: "ADD_BLOCK",
    elem: id
  }
}

export function Remove(id){
	return{
		type: "REMOVE_BLOCK",
		elem: id
	}	
}

export function todoRemove(parentId, childId){
	return{
		type: "REMOVE_TODO",
		childId: childId,
		parentId: parentId
	}
}

export function todoAdd(child, parent){
	return{
		type: "ADD_CHILD",
		childId: child,
		parentId: parent
	}
}

export function addNameOfBlock(parentId, name){
	return{
		type: "ADD_NAMEBLOCK",
		name: name,
		parentId: parentId
	}
}

export function addNameOfTodo(parentId, childId, name){
	return{
		type: "ADD_NAMETODO",
		name: name,
		parentId: parentId,
		childId: childId,
	}
}