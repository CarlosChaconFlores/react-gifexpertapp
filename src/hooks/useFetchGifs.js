import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'

export const useFetchGifs = ( category) => {

    const [state, setState] = useState({
        data:[],
        loading:true 
    })

    useEffect(()=>{
        getGifs( category )
            .then(imgs => {
                setTimeout(()=> {setState({
                    data: imgs,
                    loading: false
                });
            
            },2000)

                
            } )
    },[category])


    // setTimeout(()=> {
    //     setState({
    //         data:['1'],
    //         loading: false
    //     })
    // },5000);

    return state;
}