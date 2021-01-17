import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./Validation/CharComponent";

class App extends Component {

  state = {
    name:"",
    // length:0
  }

  printLengthHandler = (event) => {
    // let length = event.target.value.length;
    // console.log(event.target.value, length)
    this.setState({name:event.target.value,
      // length:length
    })
  }

  deleteComponent = (index) => {
    let str = this.state.name.slice(0, index) + this.state.name.slice(index+1);
    // let str = [...this.state.name];
    // let str = this.state.name.slice();
    // str = str.split("");
    // str.splice(index, 1);
    // console.log(str);
    // str = str.join("");
    // console.log(str);
    this.setState({name:str,
      // length:str.length
    });
  }

  render(){

    let charComponents = (
      <div>
        {/* {this.state.name.map.call((letter,index) => { */}
        {this.state.name.split("").map((letter,index) => {
          return <CharComponent letter={letter} click={() => this.deleteComponent(index)} key={index} />
        })}
        {/* {Array.prototype.map.call(this.state.name, (letter,index) => {
          return <CharComponent letter={letter} click={() => this.deleteComponent(index)} key={index} />
        })} */}
      </div>
    )

    return (
      <div className="App">
        <h4><u>Assignment</u></h4>
        <input type="text" onChange={this.printLengthHandler} value={this.state.name} />
        <p>length of the text: {this.state.name.length}</p>
        <ValidationComponent len={this.state.name.length} />
        {charComponents}
        {/* <CharComponent /> */}
      </div>
    );
  }
}

export default App;
