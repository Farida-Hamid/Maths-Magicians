import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleClick(event) {
    const result = calculate(this.state, event.target.value);
    this.setState(result);
  }

  handleDisplay(event) {
    this.setState({
      total: event.target.value,
    });
  }

  render() {
    const currentState = this.state;
    return (
      <div className="calculator">
        <div className="screen" onChange={this.handleDisplay}>{currentState.next || currentState.total || 0}</div>
        <div className="row">
          <button type="button" className="gray" value="AC" onClick={this.handleClick}>AC</button>
          <button type="button" className="gray" value="+/-" onClick={this.handleClick}>+/-</button>
          <button type="button" className="gray" value="%" onClick={this.handleClick}>%</button>
          <button type="button" className="orange" value="÷" onClick={this.handleClick}>&#247;</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="7" onClick={this.handleClick}>7</button>
          <button type="button" className="gray" value="8" onClick={this.handleClick}>8</button>
          <button type="button" className="gray" value="9" onClick={this.handleClick}>9</button>
          <button type="button" className="orange" value="x" onClick={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="4" onClick={this.handleClick}>4</button>
          <button type="button" className="gray" value="5" onClick={this.handleClick}>5</button>
          <button type="button" className="gray" value="6" onClick={this.handleClick}>6</button>
          <button type="button" className="orange" value="-" onClick={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="1" onClick={this.handleClick}>1</button>
          <button type="button" className="gray" value="2" onClick={this.handleClick}>2</button>
          <button type="button" className="gray" value="3" onClick={this.handleClick}>3</button>
          <button type="button" className="orange" value="+" onClick={this.handleClick}>+</button>
        </div>
        <div className="row">
          <button type="button" className="zero gray" value="0" onClick={this.handleClick}>0</button>
          <button type="button" className="gray" value="." onClick={this.handleClick}>.</button>
          <button type="button" className="orange" value="=" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
