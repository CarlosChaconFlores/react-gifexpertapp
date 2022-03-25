import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Attack on Titans']);
    //     setCategories( cats => [...cats,'Attack On Titans'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr />


            <ol>
                { categories.map((category) =>{
                    return <GifGrid 
                                key={ category }
                                category={ category }
                            />
                })}
            </ol>

        </>
    )
}