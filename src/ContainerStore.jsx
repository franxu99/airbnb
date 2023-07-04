import BoxItems from './BoxItems.jsx'
import { useEffect, useState } from 'react'


export default function ContainerStore(){
    
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/src/json/stays.json")
        .then(response => response.json())
        .then(datos => {
            setItems(datos)
        })
    }, [])

    return(
        <>
            <div className='h-14 w-[100%] text-center text-[24px] font-bold'>Stays in Finland</div>
            <div className="containerStore ps-10 pe-10 flex flex-wrap justify-around gap150 max-[375px]:block">
                {items.map(item => (
                    <BoxItems key={item.key} photo={item.photo} superhost={item.superHost} type={item.type} beds={item.beds} rating={item.rating} title={item.title}/>
                ))}
            </div>
        </>
    )
}