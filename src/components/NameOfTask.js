import React from 'react';

class NameOfTask extends React.Component{
	state = { name: false }
  insertName(e){
    let value = e.target.value;
    this.setState({name: value})
  }
  render(){
		const {name} = this.state;
    return(
      <h1 className="name_task cursor_style">
        {name ? name : (<input type="text" className="name" onBlur={this.insertName.bind(this)}/>)}
      </h1>
    )
  }
}

export default NameOfTask;