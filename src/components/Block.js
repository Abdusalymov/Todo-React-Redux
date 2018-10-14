import React from 'react';
import  HideComponent from './HideComponent'
import NameOfTask from './NameOfTask'
let uniqid = require('uniqid');

class Block extends React.Component{

	toggleVisibility(){
		const {	block } = this.props;
		this.props.toggle(block.id, block.textBtn, block.visibility);
	}

	addTodo(){
		this.props.add(uniqid(), this.props.block.id);
	}

	removeThisBlock(){
		const {removeBlock, block} = this.props;
		removeBlock(block.id);
	}

  render(){
    return(
      <ul className="block_list">
        <li className="hedear_blockList">
					<div>
						<button className="btn_in_Block btn cursor_style" 
							 onClick={this.removeThisBlock.bind(this)}>
							REMOVE BLOCK
						</button>
						<button className="btn_in_Block btn cursor_style" 
							onClick={this.addTodo.bind(this)}>
							ADD ITEM
						</button>
					</div>
					<span className="open_close cursor_style" 
						onClick={this.toggleVisibility.bind(this)}
						>
						{this.props.block.textBtn}
					</span>
				</li>

				<NameOfTask block={this.props.block} 
					addNameOfBlock={this.props.addNameOfBlock}
				/>

				<HideComponent
				 items={this.props.ident}
				todosArr={this.props.todosArr} 
				blockId={this.props.block.id}
				remove={this.props.remove} 
				addNameOfTodo={this.props.addNameOfTodo}
				addSubTodo={this.props.addSubTodo}
				subTodoArr={this.props.subTodoArr}
				addNameSubTodo={this.props.addNameSubTodo}
				removeSubTodo={this.props.removeSubTodo}
				block={this.props.block} 
				/> 
      </ul>
    )
  }
}
export default Block;