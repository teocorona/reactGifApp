// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

       const {data:images, loading} = useFetchGifs(category);
       


  return (
    <>   
        <h2>{category}</h2>
        {loading && <p>'Loading...'</p>}
        <div className='card-grid'> 
            {
                images.map(img => (                
                    <GifGridItem
                        key = {img.id}
                        {...img}
                    />                
                ))
            }    
        </div>
    </>
  )
}
