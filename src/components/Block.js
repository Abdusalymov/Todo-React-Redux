import React from 'react';
import  HideComponent from './HideComponent'
import NameOfTask from './NameOfTask'
// import { Remove } from '../actions'
// import { connect } from 'react-redux';
let uniqid = require('uniqid');
class Block extends React.Component{

	dispatch(){
		const {removeBlock, ident} = this.props;
		removeBlock(ident);
	}
  render(){
		const { 
			child, 
			add, 
			remove
		} = this.props
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
				<NameOfTask/>
				<HideComponent child={child} remove={remove}/>
      </ul>
    )
  }
}
export default Block;