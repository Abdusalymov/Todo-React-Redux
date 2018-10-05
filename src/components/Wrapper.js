import React from 'react';
import Block from './Block'
let uniqid = require('uniqid');
const Wrapper = ({ child, add, removeBlock }) =>{
	return(
		<div className="wrapper_inner">
			<div className="add_Main_Task">
				<button id="main_task" 
					className="btn btnAddingTask cursor_style"
					onClick={()=>{
						add(uniqid());
					}}> 
					ADD NEW TASK
				</button>
			</div>
				{ child.length !== 0 && child.map((item) => 
					(<Block key={uniqid()} ident={item} removeBlock={removeBlock}/>))
				}
		</div>
	)
}


export default Wrapper;