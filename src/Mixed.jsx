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

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
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
                <button className="counter-button" onClick={decrement} style={{backgroundColor: color}}>Decrement</button>
                <button className="counter-button" onClick={reset} style={{backgroundColor: color}}>Reset</button>
                <button className="counter-button" onClick={increment} style={{backgroundColor: color}}>Increment</button>
            </div>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
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