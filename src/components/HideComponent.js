import React from 'react';
import ElementList from './ElementList';
let uniqid = require('uniqid');

 const HideComponent = (props) =>{
	// const{child, remove} = props;
	// let style = {display: toggle};
	 return(
		<div className="hide" > {/*style={style}*/}
			{props.child.length !== 0 && props.child.map((item) => 
				(<ElementList key={uniqid()} ident={item} remove={props.remove}/>))
			}
		</div>
	)
}

export default HideComponent;