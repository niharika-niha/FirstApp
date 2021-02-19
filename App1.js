import './App.css';
import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import ColorChange from './ColorChange';
import Register1 from './Register1';
import PP from './PP';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
          counter:0
      }
      
  }
  increment=()=>{
    if(this.state.counter<10){
      this.setState({counter:this.state.counter+1});
      document.getElementById('count').style.background='green';
    }
    else{
      alert("Value Can't be greater than 10")
    }
  }
  decrement=()=>{
    if(this.state.counter>0){

      this.setState({counter:this.state.counter-1});
      document.getElementById('count').style.background='red';
    }
    else{
      alert("value can not be negative")
    }
  }
  reset=()=>{
      this.setState({counter:0});
      document.getElementById('count').style.background='hotpink';
    }
    
  
  render(){
  return (
    <React.Fragment>
    <div className="counter-style" >
      <button className='change' id='count'>{this.state.counter}</button>
      <br/>
      <Button  className='btn' onClick={this.increment} name="inc">Increment</Button>
      <Button className='btn' onClick={this.decrement} name="dec">Decrement</Button>
      <br/>
      <Button className='btn'  onClick={this.reset} name="dec">Reset</Button>
      <ColorChange counter={this.state.counter}/>
      <hr/>
      {/* <PP counter={this.state.counter}/> */}
      <Register1/>
      </div>
    </React.Fragment>
  );
  }
}

export default App;

