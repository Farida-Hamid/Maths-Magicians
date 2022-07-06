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

  handleDisplay(event) {
    console.log('called handleDisplay');
    this.setState({
      total: event.target.value,
    });
  }

  handleClick(event) {
    console.log('called handleClick');
    const result = calculate(this.state, event.target.value);
    this.setState(result);
  }

  render() {
    return (
      <div className="calculator">
        <div className="screen" onChange={this.handleDisplay}>{this.state.total}</div>
        <div className="row">
          <button type="button" className="gray" value="AC" onClock={this.handleClick}>AC</button>
          <button type="button" className="gray" value="+/-" onClock={this.handleClick}>+/-</button>
          <button type="button" className="gray" value="%" onClock={this.handleClick}>%</button>
          <button type="button" className="orange" value="÷" onClock={this.handleClick}>&#247;</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="7" onClock={this.handleClick}>7</button>
          <button type="button" className="gray" value="8" onClock={this.handleClick}>8</button>
          <button type="button" className="gray" value="9" onClock={this.handleClick}>9</button>
          <button type="button" className="orange" value="x" onClock={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="4" onClock={this.handleClick}>4</button>
          <button type="button" className="gray" value="5" onClock={this.handleClick}>5</button>
          <button type="button" className="gray" value="6" onClock={this.handleClick}>6</button>
          <button type="button" className="orange" value="-" onClock={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button type="button" className="gray" value="1" onClock={this.handleClick}>1</button>
          <button type="button" className="gray" value="2" onClock={this.handleClick}>2</button>
          <button type="button" className="gray" value="3" onClock={this.handleClick}>3</button>
          <button type="button" className="orange" value="+" onClock={this.handleClick}>+</button>
        </div>
        <div className="row">
          <button type="button" className="zero gray" value="0" onClock={this.handleClick}>0</button>
          <button type="button" className="gray" value="." onClock={this.handleClick}>.</button>
          <button type="button" className="orange" value="=" onClock={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
