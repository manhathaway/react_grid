import './Calculator.css'

function Calculator() {
    return (
        <div className="body">
            <h2 className="heading">Calculator</h2>
            <div className="content Calculator-content">
                <div className="Calculator-output">
                    <div className="Calculator-previous-operand"></div>
                    <div className="Calculator-current-operand"></div>
                </div>
                <div className="Calculator-grid">
                    <button style={{gridArea: "-AC"}}>AC</button>
                    <button style={{gridArea: "-DEL"}}>DEL</button>
                    <button style={{gridArea: "-DIV"}}>/</button>
                    <button style={{gridArea: "one"}}>1</button>
                    <button style={{gridArea: "two"}}>2</button>
                    <button style={{gridArea: "thr"}}>3</button>
                    <button style={{gridArea: "-MUL"}}>*</button>
                    <button style={{gridArea: "fou"}}>4</button>
                    <button style={{gridArea: "fiv"}}>5</button>
                    <button style={{gridArea: "six"}}>6</button>
                    <button style={{gridArea: "-ADD"}}>+</button>
                    <button style={{gridArea: "sev"}}>7</button>
                    <button style={{gridArea: "eig"}}>8</button>
                    <button style={{gridArea: "nin"}}>9</button>
                    <button style={{gridArea: "-SUB"}}>-</button>
                    <button style={{gridArea: "-DEC"}}>.</button>
                    <button style={{gridArea: "zer"}}>0</button>
                    <button style={{gridArea: "-EQU"}}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;