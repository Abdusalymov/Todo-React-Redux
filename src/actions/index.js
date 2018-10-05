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

export function todoAdd(id){
	return{
		type: "ADD_TODO",
		elem: id
	}
}
export function todoRemove(id){
	return{
		type: "REMOVE_TODO",
		elem: id
	}
}