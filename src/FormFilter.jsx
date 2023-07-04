import { useState, useEffect } from 'react';
import './FormFilter.css'
import InputsGuest from './InputsGuest.jsx';


export default function FormFilter(){
    const [inputValueAdult, setInputValueAdult] = useState('');
    const [inputValueChildren, setInputValueChildren] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Add guests');
    const [valueTotal, setValueTotal] = useState(0);

    const optionLocation = document.getElementsByClassName('optionLocation');

    function handleClickGuest(){
        const idInputsGuest = document.getElementById('inputsGuest');
        for(let i = 0; i < optionLocation.length; i++){
            optionLocation[i].classList.add('noViewLocation');
        }
        idInputsGuest.classList.remove('noViewGuests');
    }

    function handleClickLocation(){
        const idInputsGuest = document.getElementById('inputsGuest');
        for(let i = 0; i < optionLocation.length; i++){
            optionLocation[i].classList.remove('noViewLocation');
        }
        idInputsGuest.classList.add('noViewGuests');
    }

    function handleInputAdultsChange(value) {
        setInputValueAdult(value);
    }
    
    function handleInputChildrenChange(value) {
        setInputValueChildren(value);
    }
    
    useEffect(() => {
        const total = Number(inputValueAdult) + Number(inputValueChildren);
        setValueTotal(total);
        setPlaceholderText(`${total} guests`);
    }, [inputValueAdult, inputValueChildren]);

    

    return(
        <>
            <div className="h-[40vh] w-[100%] z-50 flex justify-center bg-slate-100
                            max-[375px]:h-[60vh]">
                <div className="h-[20vh] w-[100%] z-50 flex justify-center items-center
                                max-[375px]:h-[100%]">
                    <form action="#" className='h-[8vh] w-[60vw] flex items-center justify-between border rounded-l-3xl rounded-r-3xl shadow-md
                                                max-[375px]:h-[100%] max-[375px]:block max-[375px]:border-0 shadow-none'>
                        <div className="h-[8vh] w-[40vw] flex
                                        max-[375px]:block max-[375px]:w-[100%]">
                            <div id='containerLocation' className="h-[100%] w-[50%]
                                                                    max-[375px]:w-[100%]">
                                <p className="absolute ps-4 pt-3 font-bold text-xs">LOCATION</p>
                                <input type="text" defaultValue={"Helsinki, Finland"} className='h-[100%] w-[100%] text-start ps-4 pt-4 border-r rounded-l-3xl cursor-pointer
                                                                                                max-[375px]:rounded-tl-3xl max-[375px]:rounded-tr-3xl max-[375px]:rounded-bl-none'
                                    onClick={handleClickLocation}
                                />
                                <div className='max-[375px]:absolute top-[20vh]'>
                                    <button className="optionLocation"><img className='h-5' src="/src/assets/location.png" alt="" />Helsinki, Finland</button>
                                    <button className="optionLocation"><img className='h-5' src="/src/assets/location.png" alt="" />Turku, Finland</button>
                                    <button className="optionLocation"><img className='h-5' src="/src/assets/location.png" alt="" />Oulu, Finland</button>
                                    <button className="optionLocation"><img className='h-5' src="/src/assets/location.png" alt="" />Vaasa, Finland</button>
                                </div>
                            </div>
                            <div id='containerGuest' className="h-[100%] w-[50%]
                                                                max-[375px]:w-[100%]">
                                <p className="absolute ps-4 pt-3 font-bold text-xs">GUEST</p>
                                <input id="inputGuestFormFilter" type="text" placeholder={placeholderText} className='h-[100%] w-[100%] ps-4 pt-4 text-start border-r cursor-pointer
                                                                                                                        max-[375px]:rounded-bl-3xl max-[375px]:rounded-br-3xl max-[375px]:border-y'
                                    onClick={handleClickGuest}
                                />
                                <div className='h-[25vh] flex items-center ps-4'>
                                    <div id='inputsGuest' className='noViewGuests'>
                                        <InputsGuest onInputChange={handleInputAdultsChange} typePerson={'Adults'}/>
                                        <InputsGuest onInputChange={handleInputChildrenChange} typePerson={'Children'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20vw] flex justify-center
                                        max-[375px]:absolute max-[375px]:top-[50vh] max-[375px]:w-[60%]">
                            <div className='w-[8vw] h-[8vh] bg-[#EB5757] hover:bg-[#ff7a7a] flex justify-center items-center rounded-l-3xl rounded-r-3xl cursor-pointer
                                            max-[375px]:w-[80%]'>
                                <img src='/src/assets/lupaWhite.png' alt='' className='h-[3vh]  flex justify-center'/>
                                <button value={''} className='w-[5vw] h-[8vh] absolute bg-transparent rounded-r-3xl' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}