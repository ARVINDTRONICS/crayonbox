import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
  
    super(props);
    this.state={text:"Stranger"};
  
  }


handleChange(e){

  if(e.key === "Escape"){

    e.target.blur();

  }
  else{
    
  
      this.setState({text:e.target.value});
    }

  }

render(){

  return (

    <div className="box">
    <div className="container">
    <input className="inputbox" onKeyUp={(e)=>this.handleChange(e)}></input>
    <h1>Hi,there {this.state.text}</h1>
    <button type='submit'>Submit</button>
    </div>  
     </div>
  );


}

}
  

export default App;
