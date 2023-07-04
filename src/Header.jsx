import './Header.css'
import { useState} from 'react'
import ButtonFilter from './ButtonFilter.jsx'
import FormFilter from './FormFilter.jsx';

export default function Header(){


    return(
        <>
            <header className="h-[10vh] w-[99.2vw] flex items-center justify-between max-[375px]:block max-[375px]:h-[20vh]">
                <div className="h-14 w-[25vw] text-[#EB5757] text-[1.4rem] font-bold font-[Poppins] flex items-center justify-center gap-2 max-[375px]:w-[100%]"><img className='h-5' src="/src/assets/triangleLogo.png" alt="" />windbnb</div>
                <div className="containerForm h-20 w-[40vw] text-[#000000] font-medium flex items-center justify-center
                                max-[375px]:w-[100vw] max-[375px]:flex">
                    <form action="#" className='h-[7vh] w-[max-content] flex items-center justify-between border rounded-l-3xl rounded-r-3xl shadow-md
                                                max-[375px]:w-[90%]'>
                        <ButtonFilter />
                        <input type="text" placeholder='Add guests' className='h-[100%] text-center border-r
                                                                                max-[375px]:w-[35vw]'/>
                        <div className='w-[5vw] h-[7vh] hover:bg-[#f7f7f7aa] rounded-r-3xl flex justify-center items-center
                                        max-[375px]:w-[15vw]'>
                            <img src='/src/assets/lupa.png' alt='' className='h-[3vh]  flex justify-center'/>
                            <button id='btnSearch' value={''} className='w-[5vw] h-[7vh] absolute bg-transparent rounded-r-3xl' />
                        </div>
                    </form>
                </div>
            </header>
            
            <Overlay />
        </>
    )
}


function Overlay(){
    
    function handleClick(){
        const formFilter = document.getElementById('formFilter');
        formFilter.classList.add('noView');
    }


    return(
        <>
            <div id='formFilter' className='noView h-[40vh] w-[99.2vw] z-10 left-0 top-0 absolute  bg-[#6d6d6d6c]
                                            max-[375px]:h-[60vh]'
                >
                <FormFilter />
                <div id='deleteFilter' className='h-[60vh] top-[40vh] w-[99.2vw] absolute bg-[#6d6d6d6c] max-[375px]:top-[60vh]'
                    onClick={handleClick}>
                </div>
            </div>

            
        </>
    )
}