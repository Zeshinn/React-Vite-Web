import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Denis");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed);
    }
    
    return(<>
        <div>
            <p>Name:&nbsp;{name}</p>
            <button onClick={updateName}>Set&nbsp;Name</button>
            <p>Age:&nbsp;{age}</p>
            <button onClick={updateAge}>Increment&nbsp;Age</button>
            <p>Is Employed:&nbsp;{isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle&nbsp;Employment</button>
        </div>
    </>);
}
export default MyComponent;