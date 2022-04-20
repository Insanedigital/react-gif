import React, {useState} from 'react'
import Proptypes from 'prop-types';

export const AddCategory = ({setCategories} ) => {

    //Para obtener el estado necesito poner un useState

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    

        const handleSubmit = (e) => {
            if(inputValue.trim().length > 2) {
            e.preventDefault();
            //insertando valores
            setCategories(cats => [inputValue, ...cats]);
            setinputValue(''); 
            }else{
                e.preventDefault();
                alert('Mas de 2');
            }
        }
    


  return (
    <form onSubmit={handleSubmit}>
        <input             
            type="text"
            value={inputValue}
            onChange={handleInputChange }
        />
    </form>
  )
}


AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}
