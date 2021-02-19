import './App.css';
import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import ColorChange from './ColorChange';
import MainPage from './MainPage';
class App extends Component{
  
  render(){
  return (
  <div className="counter-style">
      <MainPage/>
      </div>
  );
  }
}

export default App;

