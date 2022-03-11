import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//rafc snippet

export const GifExpertApp = () => {

    // const categories = ['Puebla', 'Mexico','Cholula']
    const [categories, setCategories] = useState(['dog'])

    const handleAdd = () => {
        // setCategories( (categories) => categories.concat('Chipilo'));
        setCategories ([...categories, ''])
    }

    return (
    <>
        <h2>GifApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr />
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            { 
                categories.map((category,i) =>{
                    return (<GifGrid 
                        key = {category}
                        category={category} 
                        />)
                })
            }
        </ol>
    </>
    )
    
}

