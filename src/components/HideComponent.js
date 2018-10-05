import React from 'react';
import ElementList from './ElementList';

 const HideComponent = (props) =>{
	const{child, remove} = props;
	let style = {display: toggle};
	 return(
		<div className="hide" style={style}>
			{child.length !== 0 && child.map((item, index) => 
				(<ElementList key={item} ident={index} remove={remove}/>))
			}
		</div>
	)
}

export default HideComponent;