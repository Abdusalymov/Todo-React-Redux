import React from 'react';
import ElementList from './ElementList';
let uniqid = require('uniqid');

 const HideComponent = (props) =>{
	 return(
		<div className="hide" > {/*style={style}*/}
			{props.items.child.length !== 0 && props.items.child.map((index) => 
				(<ElementList key={uniqid()} 
					parentId={props.items.id}
					index={index} 
					remove={props.remove} 
					addNameOfTodo={props.addNameOfTodo}/>
				))
			}
		</div>
	)
}

export default HideComponent;