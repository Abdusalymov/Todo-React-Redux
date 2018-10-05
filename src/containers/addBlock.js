import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import { Add, Remove } from '../actions';

const mapStateToProps = state => {
	return{
		child: state.todos,
	}
}
const mapDispatchToProps = dispatch => {
  return {
    add: (id) => {
      dispatch(Add(id))
		},
		removeBlock: (id) =>{
			dispatch(Remove(id))
		}
  }
}
const AddBlock = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Wrapper);

export default AddBlock;