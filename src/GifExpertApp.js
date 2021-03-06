import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{ 

    const [categories, setCategories] = useState(['Federer'])

   // const handleAdd = () => {
     //   setCategories(cats =>([...categories, 'Yugioh']))
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>            
            <hr/>
            <ul>
                 {
                    categories.map( categoria => (
                     <GifGrid
                     key={categoria}                     
                     categoria={categoria} />
                    ))
                 }
            </ul>
            

        </>
    )
}



export default GifExpertApp;