import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function Addition(){
    setResult(parseFloat(num1)+parseFloat(num2))
  }
  function Subtraction(){
    setResult(parseFloat(num1)-parseFloat(num2))
  }
  function Multiplication(){
    setResult(parseFloat(num1)*parseFloat(num2))
  }
  function Divide(){
    setResult(parseFloat(num1)/parseFloat(num2))

  }
  function Clear(){
    setNum1('')
    setNum2('')
    setResult('')
  }

  return (
    <div>
      <div className="wrapper">
        <h1>Basic Calculator</h1>
        <h2>Result</h2>
        <div className='result'>
          <h1>{result}</h1>
          </div>
        <input
          className="input_box"
          type="number"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br />
        <br />
        <input
          className="input_box"
          type="number"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="btn">
        <button id="btn1" onClick={Addition}>Addition</button>
        <button id="btn2" onClick={Subtraction}>Subtraction</button>
        <button id="btn3" onClick={Multiplication}>Multiplication</button>
        <button id="btn4" onClick={Divide}>Divide</button>
        <button onClick={Clear}>Clear</button>
        <button onClick={()=>setResult('')}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
