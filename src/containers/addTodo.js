import { connect } from 'react-redux'
import Block from '../components/Block'
import { todoAdd, todoRemove } from '../actions'

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
		// remove: (id)=>{
		// 	dispatch(todoRemove(id))
		// }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Block);
// export default AddTodo;