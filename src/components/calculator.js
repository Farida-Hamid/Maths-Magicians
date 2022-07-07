import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleClick = (event) => {
    const result = calculate(state, event.target.value);
    setState(result);
  };

  const handleDisplay = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="calculator">
      <div className="screen" onChange={handleDisplay}>{state.next || state.total || 0}</div>
      <div className="row">
        <button type="button" className="gray" value="AC" onClick={handleClick}>AC</button>
        <button type="button" className="gray" value="+/-" onClick={handleClick}>+/-</button>
        <button type="button" className="gray" value="%" onClick={handleClick}>%</button>
        <button type="button" className="orange" value="÷" onClick={handleClick}>&#247;</button>
      </div>
      <div className="row">
        <button type="button" className="gray" value="7" onClick={handleClick}>7</button>
        <button type="button" className="gray" value="8" onClick={handleClick}>8</button>
        <button type="button" className="gray" value="9" onClick={handleClick}>9</button>
        <button type="button" className="orange" value="x" onClick={handleClick}>x</button>
      </div>
      <div className="row">
        <button type="button" className="gray" value="4" onClick={handleClick}>4</button>
        <button type="button" className="gray" value="5" onClick={handleClick}>5</button>
        <button type="button" className="gray" value="6" onClick={handleClick}>6</button>
        <button type="button" className="orange" value="-" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button type="button" className="gray" value="1" onClick={handleClick}>1</button>
        <button type="button" className="gray" value="2" onClick={handleClick}>2</button>
        <button type="button" className="gray" value="3" onClick={handleClick}>3</button>
        <button type="button" className="orange" value="+" onClick={handleClick}>+</button>
      </div>
      <div className="row">
        <button type="button" className="zero gray" value="0" onClick={handleClick}>0</button>
        <button type="button" className="gray" value="." onClick={handleClick}>.</button>
        <button type="button" className="orange" value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
