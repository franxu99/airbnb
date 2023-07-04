
import './BoxItems.css'




export default function BoxItems({photo, superhost, type, beds, rating, title}){

    return(
        <>
            <div className="h-[44vh] w-[20vw] max-[375px]:w-[100%]">
                <div className="h-[30vh] w-[20vw] max-[375px]:w-[100%]">
                    <img src={`${photo}`} className="h-[100%] w-[100%] rounded-2xl cursor-pointer" alt="" />
                </div>
                <div className='h-[5vh] flex items-center select-none'>
                    {superhost && <div className='w-[min-content] ps-2 pe-2 mr-2 rounded border font-semibold text-[#4F4F4F]'>SuperHost</div>}
                    <p className='w-[-webkit-fill-available] pe-1 font-[490] text-[#a4a4a4]'>{type}</p>
                    {type === "Entire apartment"?<p className='w-[-webkit-fill-available] font-[490] text-[#a4a4a4]'>. {beds} beds</p> : null}
                    <div className='h-[5vh] w-[-webkit-fill-available] flex items-center justify-end'><img className='h-4 pe-2' src="/src/assets/estrella.png" alt="" /><p className='font-semibold cursor-pointer'>{rating}</p></div>
                </div>
                <input className='h-[3vh] flex items-center font-semibold cursor-pointer hover:underline max-[375px]:w-[100%]' type='submit' value={title}/>
                
            </div>
        </>
    )
}