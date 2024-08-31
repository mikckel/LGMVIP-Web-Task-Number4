// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(null);

    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        setCurrentOperand(currentOperand + number);
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        setOperation(op);
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        setCurrentOperand(computation.toString());
        setOperation(null);
        setPreviousOperand('');
    };

    const clearDisplay = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
    };

    return (
        <div className="calculator">
            <div className="display">{currentOperand}</div>
            <div className="buttons">
                <button className="btn" onClick={() => appendNumber('7')}>7</button>
                <button className="btn" onClick={() => appendNumber('8')}>8</button>
                <button className="btn" onClick={() => appendNumber('9')}>9</button>
                <button className="btn operator" onClick={() => chooseOperation('/')}>/</button>
                <button className="btn" onClick={() => appendNumber('4')}>4</button>
                <button className="btn" onClick={() => appendNumber('5')}>5</button>
                <button className="btn" onClick={() => appendNumber('6')}>6</button>
                <button className="btn operator" onClick={() => chooseOperation('*')}>*</button>
                <button className="btn" onClick={() => appendNumber('1')}>1</button>
                <button className="btn" onClick={() => appendNumber('2')}>2</button>
                <button className="btn" onClick={() => appendNumber('3')}>3</button>
                <button className="btn operator" onClick={() => chooseOperation('-')}>-</button>
                <button className="btn" onClick={() => appendNumber('0')}>0</button>
                <button className="btn" onClick={() => appendNumber('.')}>.</button>
                <button className="btn operator" onClick={compute}>=</button>
                <button className="btn operator" onClick={() => chooseOperation('+')}>+</button>
                <button className="btn clear" onClick={clearDisplay}>C</button>
            </div>
        </div>
    );
}

export default Calculator;
