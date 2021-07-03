import React from 'react';
import './calculator.scss';

class Calculator extends React.Component {
    render() {
        return (
        <div className="calculator">
            <span className="display">Here we gonna show the value</span>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>,</button>
            <button>+</button>
            <button>-</button>
            <button>÷</button>
            <button>x</button>
            <button>=</button>
            <button>%</button>
            <button>√</button>
        </div>
        )
    }
}

export default Calculator;