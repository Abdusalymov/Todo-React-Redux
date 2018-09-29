import React from 'react';
import Block from './Block'

class Wrapper extends React.Component{
	state = {elems: []};
  appChildWrapper(){
    const {elems} = this.state;
    this.setState({elems: elems.concat(elems.length)});
  }
  remove(i){
    const {elems} = this.state;
    elems.splice(i, 1);
    this.setState({elems: elems});
  }
  render(){
		const {elems} = this.state;
    return(
      <div className="wrapper_inner">
        <div className="add_Main_Task">
          <button id="main_task" className="btn btnAddingTask cursor_style" onClick={this.appChildWrapper.bind(this)}>
            ADD NEW TASK
          </button>
        </div>
          { elems.length !== 0 && elems.map((item, index) => 
						(<Block key={item} ident={index} remove={this.remove.bind(this)}/>))
          }
      </div>
    )
  }
}

export default Wrapper;