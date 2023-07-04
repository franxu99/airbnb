import React, { useState } from 'react';
import './InputsGuest.css';

export default function InputsGuest(props) {
    const idInput = `input${props.typePerson}`;
    const [inputValue, setInputValue] = useState('0');

    function handleClickAdd(event) {
        event.preventDefault();
        let valueInput = Number(inputValue) || 0;
        valueInput++;
        setInputValue(valueInput.toString());
        props.onInputChange(valueInput.toString());
    }

    function handleClickSubtract(event) {
        event.preventDefault();
        let valueInput = Number(inputValue) || 0;
        valueInput = Math.max(0, valueInput - 1);
        setInputValue(valueInput.toString());
        props.onInputChange(valueInput.toString());
    }

    function textPlaceholder(){
        switch(props.typePerson){
            case "Adults": 
                return "Ages 13 or abaove";
                break;
            case "Children":
                return "Ages 2-12"
                break;
        }
    }

    return (
        <>
            <div>
                <label className='font-semibold' htmlFor="adults">{props.typePerson}</label>
                <p className='text-gray-500'>{textPlaceholder()}</p>
                <div className='flex items-center'>
                    <button className="btnInputGuest" id={`add${props.typePerson}`} onClick={handleClickAdd}>+</button>
                    <input
                        className="h-10 w-10 bg-transparent text-center"
                        type="text"
                        name="adults"
                        id={idInput}
                        value={inputValue}
                        readOnly
                    />
                    <button className="btnInputGuest" id={`subtract${props.typePerson}`} onClick={handleClickSubtract}>-</button>
                </div>
            </div>
        </>
    );
}