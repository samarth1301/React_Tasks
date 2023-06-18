import React, { useState } from "react";
import styles from "../Task2.module.css";

function Task2() {
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
      <div className={styles.calculator}>
        <div className={styles.display}>
          <h2>{calc || 0}</h2>
        </div>
        <div className={styles.buttons}>
          <input type="button" value="7" onClick={() => updateCalc("7")} />
          <input type="button" value="8" onClick={() => updateCalc("8")} />
          <input type="button" value="9" onClick={() => updateCalc("9")} />
          <input
            type="button"
            value="/"
            className={styles.btn}
            onClick={() => updateCalc("/")}
          />


          <input type="button" value="4" onClick={() => updateCalc("4")} />
          <input type="button" value="5" onClick={() => updateCalc("5")} />
          <input type="button" value="6" onClick={() => updateCalc("6")} />
          <input
            type="button"
            value="x"
            className={styles.btn}
            onClick={() => updateCalc("*")}
          />

          <input type="button" value="1" onClick={() => updateCalc("1")} />
          <input type="button" value="2" onClick={() => updateCalc("2")} />
          <input type="button" value="3" onClick={() => updateCalc("3")} />
          <input
            type="button"
            value="-"
            className={styles.btn}
            onClick={() => updateCalc("-")}
          />

          <input type="button" value="0" onClick={() => updateCalc("0")} />

          <input type="button" value="." onClick={() => updateCalc(".")} />
          <input
            type="button"
            value="="
            className={styles.btn + " " + styles.equal}
            onClick={calculate}
          />
          <input
            type="button"
            value="+"
            className={styles.btn}
            onClick={() => updateCalc("+")}
          />

        </div>
      </div>
    </>
  );
}

export default Task2;
