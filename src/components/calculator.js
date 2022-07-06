import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="calculator">
        <div className="screen">0</div>
        <div className="row">
          <button type="button" className="gray">AC</button>
          <button type="button" className="gray">+/-</button>
          <button type="button" className="gray">%</button>
          <button type="button" className="orange">&#247;</button>
        </div>
        <div className="row">
          <button type="button" className="gray">7</button>
          <button type="button" className="gray">8</button>
          <button type="button" className="gray">9</button>
          <button type="button" className="orange">x</button>
        </div>
        <div className="row">
          <button type="button" className="gray">4</button>
          <button type="button" className="gray">5</button>
          <button type="button" className="gray">6</button>
          <button type="button" className="orange">-</button>
        </div>
        <div className="row">
          <button type="button" className="gray">1</button>
          <button type="button" className="gray">2</button>
          <button type="button" className="gray">3</button>
          <button type="button" className="orange">+</button>
        </div>
        <div className="row">
          <button type="button" className="zero gray">0</button>
          <button type="button" className="gray">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
