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