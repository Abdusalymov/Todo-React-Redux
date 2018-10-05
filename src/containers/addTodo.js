import { connect } from 'redux'
import Block from '../components/Block'
import { todoAdd, todoRemove} from '../actions'

const mapStateToProps = state =>{
	return {
		child: state.todo
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		add: (id)=>{
			dispatch(todoAdd(id))
		},
		remove: (id)=>{
			dispatch(todoRemove(id))
		}
	}
}

const Block = connect(
	mapStateToProps,
	mapDispatchToProps
)(HideComponent);

export default Block;