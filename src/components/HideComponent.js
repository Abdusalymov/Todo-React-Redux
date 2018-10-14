import React from 'react';
import ElementList from './ElementList';
let uniqid = require('uniqid');

const HideComponent = (props) =>{

	const style = {display: props.block.visibility};
	
	return(
		<div className="hide" style={style}> 
			{
				props.todosArr.length !== 0 && props.todosArr.map((item) =>{
					let component; 
					if(item.blockId === props.blockId){
						component =	(<ElementList key={uniqid()} 
						todoId={item.id} 
						remove={props.remove}
						todoName={item.todoName}
						addNameOfTodo={props.addNameOfTodo}
						addSubTodo={props.addSubTodo}
						subTodoArr={props.subTodoArr}
						addNameSubTodo={props.addNameSubTodo}
						removeSubTodo={props.removeSubTodo}
						/>)
					}
					return component;
				})
			}
		</div>
	)
}

export default HideComponent;