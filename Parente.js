import React, { Component } from 'react'
import Childe from './Childe';

class Parente extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.state}</h1>
        <Childe greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default Parente
