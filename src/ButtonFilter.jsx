import { useState} from 'react'


export default function ButtonFilter(){
    
    function handleClick(){
        const formFilter = document.getElementById('formFilter');
        formFilter.classList.remove('noView')
    };

    return(
        <button className='h-[100%] w-[12vw] hover:bg-[#f7f7f7aa] text-center border-r rounded-l-3xl
                            max-[375px]:w-[40vw]'
            onClick={handleClick}
        
        >Helsinki, Finland</button>
    )
    
}