import React, {useState} from 'react';

function Mixed(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);

    }

    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const incrementHalf = () => {
        setCount(prevCount => prevCount + 16);
    }
    const incrementFull = () => {
        setCount(prevCount => prevCount + 26);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const decrementHalf = () => {
        setCount(prevCount => prevCount - 16);
    }
    const decrementFull = () => {
        setCount(prevCount => prevCount - 26);
    }

    const reset = () => {
        setCount(0);
    }
    return(
        <>
            <div className="counter-container">
                <p className="count-display">{count}</p>
            </div>
            <div className='counter-container'>
                <button className="counter-button" onClick={decrementHalf} style={{backgroundColor: color}}>-16</button>
                <button className="counter-button" onClick={decrementFull} style={{backgroundColor: color}}>-26</button>
                <button className="counter-button" onClick={decrement} style={{backgroundColor: color}}>-1</button>
                <button className="counter-button" onClick={reset} style={{backgroundColor: color}}>Reset</button>
                <button className="counter-button" onClick={increment} style={{backgroundColor: color}}>+1</button>
                <button className="counter-button" onClick={incrementHalf} style={{backgroundColor: color}}>+16</button>
                <button className="counter-button" onClick={incrementFull} style={{backgroundColor: color}}>+26</button>
            </div>
            <div className="color-picker-container">
                <h1 className='color-picker-heading'>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected&nbsp;Color:&nbsp;{color}</p>
                </div>
                <label>Select&nbsp;a&nbsp;Color:</label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </>
    );
}

export default Mixed;