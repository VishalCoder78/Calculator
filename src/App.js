import React, { useState } from "react";
import './App.css';

function Calculator() {
  const [input, setInput] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleNumberButtonClick(value) {
    setInput((prevInput) => {
      if (prevInput === "0") {
        return value;
      } else {
        return prevInput + value;
      }
    });
  }

  function handleOperatorButtonClick(newOperator) {
    if (operator && memory) {
      const result = calculate(memory, input, operator);
      setInput(result);
      setMemory(result);
      setOperator(newOperator);
    } else {
      setMemory(input);
      setOperator(newOperator);
      setInput("0");
    }
  }

  function handleEqualButtonClick() {
    if (operator && memory) {
      const result = calculate(memory, input, operator);
      setInput(result);
      setMemory(null);
      setOperator(null);
    }
  }

  function handleClearButtonClick() {
    setInput("0");
    setMemory(null);
    setOperator(null);
  }

  function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case "+":
        return parseFloat(firstOperand) + parseFloat(secondOperand);
      case "-":
        return parseFloat(firstOperand) - parseFloat(secondOperand);
      case "*":
        return parseFloat(firstOperand) * parseFloat(secondOperand);
      case "/":
        return parseFloat(firstOperand) / parseFloat(secondOperand);
      default:
        return null;
    }
  }

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
      <div className="bg-gray-950 w-80 rounded-md shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-800 flex justify-end">
          <div className="text-2xl text-white font-bold">{input}</div>
        </div>
        <div className="px-6 py-4 grid grid-cols-4 gap-2">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleClearButtonClick()}
          >
            AC
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick("%")}
          >
            %
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick("/")}
          >
            ÷
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick("+")}
          >
            +
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("9")}
          >
            9
          </button>
          
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick("-")}
          >
            -
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("6")}
          >
            6
          </button>
          
          
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick("*")}
          >
            ×
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleNumberButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md row-span-2"
            onClick={() => handleEqualButtonClick()}
          >
            =
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md col-span-2"
            onClick={() => handleNumberButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => handleOperatorButtonClick(".")}
          >
            .
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Calculator;
