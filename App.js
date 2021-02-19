import './App.css';
import React,{Component} from 'react';
import Register1 from './Register1';
import './Register1.css';

class App extends Component{  
  render(){
  return (
      <>
      <h1 className='main'>Registration</h1>
      <Register1/>
      </>
  );
  }
}

export default App;

