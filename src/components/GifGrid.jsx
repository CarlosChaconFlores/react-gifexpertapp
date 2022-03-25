import React from 'react' //, { useState, useEffect } 
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../services/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

    //const apiKey = 'OgzxYLvNZGmqFXBoBUgTAvjr6B1woYCr'
    //url = 'api.giphy.com/v1/gifs/search'
    
    // const [images, setImages] = useState([]);

    // useEffect(()=>{
    //     getGifs( category)
    //     .then( imgs => setImages(imgs))
    // },[ category ])


    //Using custom hook to do everything above
    const { data: images , loading } = useFetchGifs(category);


    return (
    <>
    <h3 className= 'animate__animated animate__backInLeft'>{ category }</h3>
    

{/*     <div className="card-grid">
            {
                images.map( img => ( 
                    <GifGridItem 
                        key= { img.id }
                        { ...img }
                     />
                ))
            }
    </div> */}

    { loading && <p className='animate__animated animate__rollIn'>Loading...</p>}

    <div className="card-grid">
        {
            images.map( img => (
                <GifGridItem 
                    key = { img.id}
                    { ...img }
                />
            ))
        }
    </div>
    </>
  )
}
