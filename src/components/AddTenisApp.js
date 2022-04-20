import React, { useState } from "react";

//Como mando mi value a set categories
export const AddTennisApp = ({setCategories}) => {

    //Investigar pero aqui inportante el uso del useState
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const enviar = (e) => {
        e.preventDefault();
        setCategories(cats =>([...cats, inputValue]))
        setinputValue ('');
    }

    return (
        <form onSubmit={enviar}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            


            />
        </form>        
     )
}