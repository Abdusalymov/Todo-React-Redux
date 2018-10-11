import { connect } from 'react-redux'
import Block from '../components/Block'
import { 
	todoAdd, 
	todoRemove, 
	addNameOfBlock, 
	addNameOfTodo } from '../actions'

const mapStateToProps = state =>{
	return {
		child: state.todos[0].child
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		add: (child, parent)=>{
			dispatch(todoAdd(child, parent))
		},
		remove: (parentId, childId)=>{
			dispatch(todoRemove(parentId, childId))
		},
		addNameOfBlock:(parentId, name)=>{
			dispatch(addNameOfBlock(parentId, name))
		},
		addNameOfTodo:(parentId, childId, name) =>{
			dispatch(addNameOfTodo(parentId, childId, name))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Block);
// export default AddTodo;