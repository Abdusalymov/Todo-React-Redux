import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import { addBlock, removeBlock, toggleVisibility } from '../actions';

const mapStateToProps = state => {
	return{
		blocksArr: state.blocks
	}
}
const mapDispatchToProps = dispatch => {
  return {
    addBlock: (id) => {
      dispatch(addBlock(id))
		},
		removeBlock: (id) =>{
			dispatch(removeBlock(id))
		},
		toggle:(parentId, textBtn, style) => {
			dispatch(toggleVisibility(parentId, textBtn, style))
		}

  }
}
const AddBlock = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Wrapper);

export default AddBlock;