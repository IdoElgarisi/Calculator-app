import { useEffect, useState } from "react"

export const CalcApp = () => {
    const [calc, setCalc] = useState("")
    const [res, setRes] = useState("")
    const ops = ["%", "/", "+", "*", "-"]

    useEffect(() => {
        calc && ops.map(op => {
            if (calc.includes(op) && !ops.includes(calc[calc.length - 1])) calcRes();
        })
    }, [calc])

    const clearCalc = () => {
        setRes(null)
        setCalc(null)
    }

    const calcRes = () => {
        setRes(eval(calc))
    }

    const setPress = (val) => {
        if (ops.includes(val) && ops.includes(calc.slice(calc.length - 1, calc.length))) return
        else (calc) ? setCalc(calc + val.toString()) : setCalc(val.toString())
    }

    const deleteBtn = () => {
        setCalc(calc.slice(0, -1))
    }

    return (
        <div className="calc-app-container flex align-center justify-center">
            <div className="calc-app ">
                <section className="res-window-container flex column">
                    <div className="eval-nums flex"><p>{calc} </p></div>
                    <div className="res-nums flex"><p>{res?.toString()?.length > 15 ? res.toString().slice(0, 15) : res}</p></div>
                </section>
                <section className="nums-container">
                    <button className="opr-btn" onClick={clearCalc}>C</button>
                    <button className="opr-btn" onClick={deleteBtn}>Del</button>
                    <button className="opr-btn" onClick={() => { setPress("%") }}>%</button>
                    <button className="opr-btn" onClick={() => { setPress("/") }}>/</button>
                    <button className="num-btn" onClick={() => { setPress(7) }}>7</button>
                    <button className="num-btn" onClick={() => { setPress(8) }}>8</button>
                    <button className="num-btn" onClick={() => { setPress(9) }}>9</button>
                    <button className="opr-btn" onClick={() => { setPress("*") }}>x</button>
                    <button className="num-btn" onClick={() => { setPress(4) }}>4</button>
                    <button className="num-btn" onClick={() => { setPress(5) }}>5</button>
                    <button className="num-btn" onClick={() => { setPress(6) }}>6</button>
                    <button className="opr-btn" onClick={() => { setPress("-") }}>-</button>
                    <button className="num-btn" onClick={() => { setPress(1) }}>1</button>
                    <button className="num-btn" onClick={() => { setPress(2) }}>2</button>
                    <button className="num-btn" onClick={() => { setPress(3) }}>3</button>
                    <button className="opr-btn" onClick={() => { setPress("+") }}>+</button>
                    <button onClick={() => { setPress() }}></button>
                    <button className="num-btn" onClick={() => { setPress(0) }}>0</button>
                    <button className="num-btn" onClick={() => { setPress(".") }}>.</button>
                    <button className="opr-btn" onClick={calcRes}>=</button>
                </section>
            </div>
        </div>
    )
}