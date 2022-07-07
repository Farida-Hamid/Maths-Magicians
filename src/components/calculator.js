import React, { useState } from 'react';
import calculate from '../logic/calculate';

// class Calculator extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: 0,
//       next: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleDisplay = this.handleDisplay.bind(this);
//   }

//   handleClick(event) {
//     // console.log('event value = ', event.target.value);
//     const result = calculate(this.state, event.target.value);
//     console.log('result= ', result);
//     console.log('result.total= ', result.total);
//     this.setState(result);
//   }

//   handleDisplay(event) {
//     this.setState({
//       total: event.target.value,
//     });
//   }

//   render() {
//     const currentState = this.state;
//     return (
//       <div className="calculator">
//         <div className="screen" onChange={this.handleDisplay}>{currentState.next || currentState.total || 0}</div>
//         <div className="row">
//           <button type="button" className="gray" value="AC" onClick={this.handleClick}>AC</button>
//           <button type="button" className="gray" value="+/-" onClick={this.handleClick}>+/-</button>
//           <button type="button" className="gray" value="%" onClick={this.handleClick}>%</button>
//           <button type="button" className="orange" value="÷" onClick={this.handleClick}>&#247;</button>
//         </div>
//         <div className="row">
//           <button type="button" className="gray" value="7" onClick={this.handleClick}>7</button>
//           <button type="button" className="gray" value="8" onClick={this.handleClick}>8</button>
//           <button type="button" className="gray" value="9" onClick={this.handleClick}>9</button>
//           <button type="button" className="orange" value="x" onClick={this.handleClick}>x</button>
//         </div>
//         <div className="row">
//           <button type="button" className="gray" value="4" onClick={this.handleClick}>4</button>
//           <button type="button" className="gray" value="5" onClick={this.handleClick}>5</button>
//           <button type="button" className="gray" value="6" onClick={this.handleClick}>6</button>
//           <button type="button" className="orange" value="-" onClick={this.handleClick}>-</button>
//         </div>
//         <div className="row">
//           <button type="button" className="gray" value="1" onClick={this.handleClick}>1</button>
//           <button type="button" className="gray" value="2" onClick={this.handleClick}>2</button>
//           <button type="button" className="gray" value="3" onClick={this.handleClick}>3</button>
//           <button type="button" className="orange" value="+" onClick={this.handleClick}>+</button>
//         </div>
//         <div className="row">
//           <button type="button" className="zero gray" value="0" onClick={this.handleClick}>0</button>
//           <button type="button" className="gray" value="." onClick={this.handleClick}>.</button>
//           <button type="button" className="orange" value="=" onClick={this.handleClick}>=</button>
//         </div>
//       </div>
//     );
//   }
// }

const Calculator = () => {
  const [state, setState] = useState({total: 0, next: 0});
  // const [next, setNext] = useState(initNxt);

  const handleClick = (event) => {
    // console.log('event value = ', event.target.value);
    // console.log('total = ', total);
    // console.log('next = ', next);
    const result = calculate(state, event.target.value);
    console.log('result= ', result);
    console.log('result.total= ', result.total);
    setState(result);
    // setNext(result.next);
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
// result=  {total: '3', next: null, operation: null}

// calc recieved obj= 
// {total: {…}, next: 0}
// next: 0
// total:
// next: "2"
// total: null problem is total is an object

//bad:
// calc recieved obj= {total: 0, next: undefined} buttonName= 1
// result=  {next: '1', total: null}
// result.total=  null
// calc recieved obj= {total: {…}, next: undefined} buttonName= +
// result=  {total: {…}, next: undefined, operation: '+'}
// result.total=  {next: '1', total: null}
// calc recieved obj= {total: {…}, next: undefined} buttonName= 2
// result=  {next: '2', total: null}next: "2"total: null[[Prototype]]: Object
// result.total=  null
// calc recieved obj= {total: {…}, next: undefined}next: undefinedtotal: {next: '2', total: null}next: "2"total: null[[Prototype]]: Object[[Prototype]]: Object buttonName= =
// result=  {}[[Prototype]]: Object
// result.total=  undefined

// good
// calc recieved obj= {total: 0, next: 0} buttonName= 1
// result=  {next: '1', total: null}
// result.total=  null
// calc recieved obj= {total: null, next: '1'} buttonName= +
// result=  {total: '1', next: null, operation: '+'}
// result.total=  1
// calc recieved obj= {total: '1', next: null, operation: '+'} buttonName= 2
// result=  {total: '1', next: '2', operation: '+'}
// result.total=  1
// calc recieved obj= {total: '1', next: '2', operation: '+'} buttonName= =
// result=  {total: '3', next: null, operation: null}
// result.total=  3