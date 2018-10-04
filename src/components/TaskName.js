// import React from 'react';
// import ElementList from './ElementList';

// export class TaskName extends React.Component{
// 	state = {name: false}
//   handleChange(e){
//     let value = e.target.value;
//     this.setState({name: value})
//   }
//   render(){
// 		const {name} = this.state;
//     return(
//       <h1 className="name_task cursor_style">
//         {name ? name : (<input type="text" className="name" onBlur={this.handleChange.bind(this)}/>)}
//       </h1>
//     )
//   }
// }
// export const HideWrapper = (props) =>{
// 	const {elems, toggle, removeBlock} = props;
// 	let style = {display: toggle};
// 	 return(
// 		<div className="hide" style={style}>
// 			{elems.length !== 0 && elems.map((item, index) => 
// 				(<ElementList key={item} ident={index} remove={removeBlock}/>))
// 			}
// 		</div>
// 	)
// }