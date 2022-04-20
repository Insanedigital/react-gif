import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    //console.log(id, title, url);
    
    return (
    <div className="card">
        <img className="img" src={url}/>
        <p>{title}</p>
    </div>
  )
}
