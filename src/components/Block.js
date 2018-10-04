import React from 'react';
// import { TaskName, HideWrapper} from './TaskName'
// import { Remove } from '../actions'
// import { connect } from 'react-redux';

class Block extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		remove: this.props.removeBlock,
	// 		ident: this.props.ident
	// 	}
	// }
	// state = {
	// 	elems: [], 
	// 	toggleSwitch: 'block', 
	// 	toggleName: "CLOSE"
	// };
  // appChildBLock(){
  //   const {elems} = this.state;
  //   this.setState({elems: elems.concat(elems.length)});
	// }
	// removeChildBlock(i){
	// 	const {elems} = this.state;
	// 	elems.splice(i,1);
	// 	this.setState({elems: elems})
	// }
	// hideElementList(){
	// 	const {toggleSwitch, toggleName} = this.state;
	// 	this.setState({
	// 		toggleSwitch: toggleSwitch === "block" ? "none" : "block",
	// 		toggleName: toggleName === "OPEN" ? "CLOSE" : "OPEN" 
	// 	})
	// }

	dispatch(){
		const {removeBlock, ident} = this.props;
		removeBlock(ident);
	}
  render(){
    return(
      <ul className="block_list">
        <li className="hedear_blockList">
					<div>
						<button className="btn_in_Block btn cursor_style" onClick={this.dispatch.bind(this)}>
							REMOVE BLOCK
						</button>
						<button className="btn_in_Block btn cursor_style"  >
							ADD ITEM
						</button>
					</div>
					<span className="open_close cursor_style">{/*toggleName*/}</span>
				</li>
				{/* <TaskName/>
				<HideWrapper elems={elems} 
					removeBlock={this.removeChildBlock.bind(this)} 
					toggle={toggleSwitch}
				/> */}
      </ul>
    )
  }
}
export default Block;