import React, {useState} from 'react';

function UpdateObj(){
    const [car, setCar] = useState(
        {year: "2024" , brand: "Ford", model: "Mustang"}
    );

    function onYearChange(event){
        setCar(prevCar => ({
            ...prevCar, year: event.target.value
        }));
    }
    function onBrandChange(event){
        setCar(prevCar => ({
            ...prevCar, brand: event.target.value
        }));
    }
    function onModelChange(event){
        setCar(prevCar => ({
            ...prevCar, model: event.target.value
        }));
    }
    return(
        <>
            <div>
                <p>Your favorite car is: {car.year} {car.brand} {car.model}</p>
                <input type="number" value={car.year} onChange={onYearChange}/><br />
                <input type="text" value={car.brand} onChange={onBrandChange}/><br />
                <input type="text" value={car.model} onChange={onModelChange}/><br />
            </div>
        </>
    );
}

export default UpdateObj;
