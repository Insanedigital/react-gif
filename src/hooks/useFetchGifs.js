import { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (categoria) => {
  const [state, setstate] = useState({
      data: [],
      loading: true
  });


  useEffect ( () => {
      getGifs(categoria)
      .then(imgs =>{
          
          setstate({
              data: imgs,
              loading: false
          });
        

      })
  }, [categoria] )

  //Marco error por que no regrese nimirr
  return state; 
}
