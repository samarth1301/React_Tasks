import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", ".", "%"];

  const updateCalc = (value) => {

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
      setCalc(calc + value);
      if (!ops.includes(value)) {
        setResult(eval(calc + value).toString());
    }
  };


  const clearDisplay = () => {
    setCalc("");
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <h2>{calc || 0}</h2>
        </div>
        <div className="buttons">
          <input
            type="button"
            value="C"
            className="btn"
            onClick={clearDisplay}
          />
          <input
            type="button"
            value="DEL"
            className="btn"
            onClick={deleteLast}
          />
          <input
            type="button"
            value="%"
            className="btn"
            onClick={() => updateCalc("%")}
          />
          <input
            type="button"
            value="/"
            className="btn"
            onClick={() => updateCalc("/")}
          />
          <input type="button" value="7" onClick={() => updateCalc("7")} />
          <input type="button" value="8" onClick={() => updateCalc("8")} />
          <input type="button" value="9" onClick={() => updateCalc("9")} />
          <input
            type="button"
            value="x"
            className="btn"
            onClick={() => updateCalc("*")}
          />
          <input type="button" value="4" onClick={() => updateCalc("4")} />
          <input type="button" value="5" onClick={() => updateCalc("5")} />
          <input type="button" value="6" onClick={() => updateCalc("6")} />
          <input
            type="button"
            value="-"
            className="btn"
            onClick={() => updateCalc("-")}
          />
          <input type="button" value="1" onClick={() => updateCalc("1")} />
          <input type="button" value="2" onClick={() => updateCalc("2")} />
          <input type="button" value="3" onClick={() => updateCalc("3")} />
          <input
            type="button"
            value="+"
            className="btn"
            onClick={() => updateCalc("+")}
          />
          <input type="button" value="0" onClick={() => updateCalc("0")} />
          <input type="button" value="00" onClick={() => updateCalc("00")} />
          <input type="button" value="." onClick={() => updateCalc(".")} />
          <input
            type="button"
            value="="
            className="btn equal"
            onClick={calculate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
