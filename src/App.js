/* eslint no-eval: 0 */

import React, {Component} from 'react'
import './App.css';
import Button from './components/Button'
import Screen from './components/Screen'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: "0",
      operatorFlag: false,
      decimalFlag: false
    }
  }

  handleClick = buttonName => {
    let currentNumber = this.state.currentNumber
    let operatorFlag = this.state.operatorFlag
    switch(true) {
      case  buttonName === "0" ||
            buttonName === "1" ||
            buttonName === "2" ||
            buttonName === "3" ||
            buttonName === "4" ||
            buttonName === "5" ||
            buttonName === "6" ||
            buttonName === "7" ||
            buttonName === "8" ||
            buttonName === "9" :
        if(this.state.currentNumber !== "0") {
          currentNumber += buttonName
          operatorFlag = false
        } else {
          currentNumber = buttonName
        }
      break
      
      case  buttonName === "+" ||
            buttonName === "-" ||
            buttonName === "*" ||
            buttonName === "/" :
        if(!this.state.operatorFlag) {
          currentNumber += buttonName
          operatorFlag = true
          this.setState({decimalFlag: false})
        } else {
          const newNumber = currentNumber.slice(0,currentNumber.length - 1)
          currentNumber = newNumber
          currentNumber += buttonName
        }
      break
      
      case  buttonName === "AC" :
        currentNumber = "0"
        operatorFlag = false
        this.setState({decimalFlag: false})
      break

      case  buttonName === "=" :
        currentNumber = eval(currentNumber)
        operatorFlag = false
        this.setState({decimalFlag: true, currentNumber: "0"})
      break

      case  buttonName === "." :
        if(!this.state.decimalFlag) {
          currentNumber += buttonName
          this.setState({decimalFlag: true})
        }
    }
    this.setState({currentNumber})
    this.setState({operatorFlag})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="calc-wrapper">
            <div className="row">
              <Screen>{this.state.currentNumber}</Screen>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick} name="7"/>
              <Button handleClick={this.handleClick} name="8"/>
              <Button handleClick={this.handleClick} name="9"/>
              <Button handleClick={this.handleClick} name="AC"/>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick} name="4"/>
              <Button handleClick={this.handleClick} name="5"/>
              <Button handleClick={this.handleClick} name="6"/>
              <Button handleClick={this.handleClick} name="/"/>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick} name="1"/>
              <Button handleClick={this.handleClick} name="2"/>
              <Button handleClick={this.handleClick} name="3"/>
              <Button handleClick={this.handleClick} name="*"/>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick} name="0"/>
              <Button handleClick={this.handleClick} name="."/>
              <Button handleClick={this.handleClick} name="+"/>
              <Button handleClick={this.handleClick} name="-"/>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick} name="="/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
