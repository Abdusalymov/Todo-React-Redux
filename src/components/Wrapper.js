import React from 'react';
import Block from '../containers/addTodo'
let uniqid = require('uniqid');

const Wrapper = ({ blocksArr, addBlock, removeBlock, toggle }) =>{
	return(
		<div className="wrapper_inner">
			<div className="add_Main_Task">
				<button id="main_task" 
					className="btn btnAddingTask cursor_style"
					onClick={()=>{
						addBlock(uniqid());
					}}> 
					ADD NEW TASK
				</button>
			</div>
				{ blocksArr.length !== 0 && blocksArr.map((item) => 
					(<Block 
						key={uniqid()} 
						block={item} 
						removeBlock={removeBlock}
						toggle={toggle}
						/>))
				}
		</div>
	)
}


export default Wrapper;