import { connect } from 'react-redux'
import Block from '../components/Block'
import { 
	todoAdd, 
	todoRemove, 
	addNameOfBlock, 
	addNameOfTodo,
	addSubTodo,
	addNameSubTodo,
	removeSubTodo } from '../actions'

const mapStateToProps = state =>{
	return {
		todosArr: state.todos,
		subTodoArr: state.subTodos
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		add: (todoId, blockId)=>{
			dispatch(todoAdd(todoId, blockId))
		},
		remove: (todoId)=>{
			dispatch(todoRemove(todoId))
		},
		addNameOfBlock:(parentId, name)=>{
			dispatch(addNameOfBlock(parentId, name))
		},

		addNameOfTodo:(parentId, childId, name) =>{
			dispatch(addNameOfTodo(parentId, childId, name))
		},
		addSubTodo:(todoId, subTodoId) =>{
			dispatch(addSubTodo(todoId, subTodoId))
		},

		addNameSubTodo:(subTodoId, name)=>{
			dispatch(addNameSubTodo(subTodoId, name))
		},
		removeSubTodo:(subTodoId) =>{
			dispatch(removeSubTodo(subTodoId))
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Block);
// export default AddTodo;