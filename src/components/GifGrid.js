import React from 'react'
//import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

  //const [count, setCount] = useState(0);
  //Recibe una funcion que quiero ejecutar
  
  const {data:images, loading} = useFetchGifs(categoria);

  console.log(loading);

  //const [images, setImages] = useState([]);

  //useEffect( ()=>{
    //getGifs(categoria)
    //.then(setImages);
  //}, [categoria])



  //CUANDO NO HAY LLAVES ES UN RETURN IMPLICITO!!!!!
  return (
    <div>
        <h3>{categoria}</h3>
          <div className='colum-3'>
            {loading && <p>Loading...</p>}
                {
                    images.map( img => (                     
                     <GifGridItem 
                     key={img.id}    
                     {...img}
                     />
                    ))
                 }
                  
          </div>
     
        
    </div>
  )
}
