import React from 'react';
import  HideComponent from './HideComponent'
import NameOfTask from './NameOfTask'
// import { Remove } from '../actions'
let uniqid = require('uniqid');
class Block extends React.Component{
	addTodo(){
		this.props.add(uniqid(), this.props.ident.id);
	}
	dispatch(){
		const {removeBlock, ident} = this.props;
		removeBlock(ident);
	}
  render(){
		// const { remove} = this.props
    return(
      <ul className="block_list">
        <li className="hedear_blockList">
					<div>
						<button className="btn_in_Block btn cursor_style" onClick={this.dispatch.bind(this)}>
							REMOVE BLOCK
						</button>
						<button className="btn_in_Block btn cursor_style" onClick={this.addTodo.bind(this)}  >
							ADD ITEM
						</button>
					</div>
					<span className="open_close cursor_style">{/*toggleName*/}</span>
				</li>
				<NameOfTask parent={this.props.ident} addNameOfBlock={this.props.addNameOfBlock}/>
				<HideComponent items={this.props.ident} remove={this.props.remove} addNameOfTodo={this.props.addNameOfTodo}/>
      </ul>
    )
  }
}
export default Block;