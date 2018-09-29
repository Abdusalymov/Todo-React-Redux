import React from 'react';
import { TaskName, HideWrapper} from './TaskName'

class Block extends React.Component{
	state = {
		elems: [], 
		toggleSwitch: 'block', 
		toggleName: "CLOSE"
	};
  appChildBLock(){
    const {elems} = this.state;
    this.setState({elems: elems.concat(elems.length)});
	}
	removeChildBlock(i){
		const {elems} = this.state;
		elems.splice(i,1);
		this.setState({elems: elems})
	}
  removeBlock(){
    this.props.remove(this.props.ident);
	}
	hideElementList(){
		const {toggleSwitch, toggleName} = this.state;
		this.setState({
			toggleSwitch: toggleSwitch === "block" ? "none" : "block",
			toggleName: toggleName === "OPEN" ? "CLOSE" : "OPEN" 
		})
	}
  render(){
		const {elems, toggleSwitch, toggleName}= this.state;
    return(
      <ul className="block_list">
        <li className="hedear_blockList">
					<div>
						<button className="btn_in_Block btn cursor_style"  onClick={this.removeBlock.bind(this)}>REMOVE BLOCK</button>
						<button className="btn_in_Block btn cursor_style"  onClick={this.appChildBLock.bind(this)}>ADD ITEM</button>
					</div>
					<span className="open_close cursor_style"  onClick={this.hideElementList.bind(this)}>{toggleName}</span>
				</li>
				<TaskName/>
				<HideWrapper elems={elems} 
					removeBlock={this.removeChildBlock.bind(this)} 
					toggle={toggleSwitch}
				/>
      </ul>
    )
  }
}
export default Block;