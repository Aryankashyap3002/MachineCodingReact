import { useState } from "react"

export function TempaeratureConverter () {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenhiet] = useState('');

    function formateValue (value) {
        if(value == '') return '';
        const numVal = parseFloat(value);
        if(isNaN(numVal)) return value;
        if(Number.isInteger(numVal)) return numVal.toString();

        return numVal.toFixed(2);
    }

    function celsiusToFahrenhite (value) {
        const res = ((value * 9) / 5 + 32);
        return res;
    }

    function fahrenhiteToCelsius (value) {
        const res = (((value-32)*5) / 9);
        return res;
    }

    function convertCelsiusToFahrenhite (value) {
        setCelsius(value);
        if(value == '') return '';
        const numValue = parseFloat(value);
        if(!isNaN(numValue)) {
            const res = celsiusToFahrenhite(numValue);
            setFahrenhiet(res);
        }

    }

    function convertFahrenhiteToCelsius (value) {
        setFahrenhiet(value);
        if(value == '') return '';
        const numVal = parseFloat(value);
        if(!isNaN(numVal)) {
            const res = fahrenhiteToCelsius(numVal);
            setCelsius(res);
        }
    }

    return (
        <div className="flex flex-col bg-gray-50">
            <h1>
                Temperature Converter
            </h1>

            <div className="mt-10">
                <label>Celsius</label>
                <div className="bg-white mt-5">
                     <input 
                        type="number"
                        placeholder="0" 
                        className="w-full outline-black border border-black"
                        id="celsiis"
                        value={formateValue(celsius)}
                        onChange={(event) => convertCelsiusToFahrenhite(event.target.value)}
                />
                </div>
            </div>
            <div className="mt-10">
                <label>Fahrenhiet</label>
                <div className="bg-white mt-5">
                     <input 
                        type="number"
                        placeholder="32" 
                        className="w-full outline-black border border-black"
                        id="fahrenhite"
                        value={formateValue(fahrenheit)}
                        onChange={(event) => convertFahrenhiteToCelsius(event.target.value)}
                />
                </div>
            </div>
        </div>
    )
} 