import React,{ useState } from 'react'
import { FilterProps } from '../Interface';

const Filters: React.FC<FilterProps> = ({theme , value, setValue, handleRegionFilter }) => {
    const [ isClicked, setClicked ] = useState(false)
    
    const regions = [
        { value: 'africa', label:'Africa'},
        { value: 'americas', label:'America'},
        { value: 'asia', label:'Asia'},
        { value: 'europe', label: 'Europe'},
        { value: 'oceania', label:'Oceania'},
    ]
    
    return (
        <div>
            <section className='flex laptop:flex-row mobile:flex-col items-center justify-between laptop:h-[3.5rem] laptop:px-[4rem] mobile:mx-auto mobile:gap-y-6 relative top-[8rem]'>
                <div className={`pl-4 flex flex-row h-full mobile:h-[3.5rem] rounded-[0.3125rem]  gap-4 laptop:w-[30rem] mobile:w-[21.4375rem] shadow-lg ${theme === 'light' ? 'bg-white shadow-slate-200/50' : 'bg-ebonyclaydark shadow-custom'} items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={`w-6 h-6 ${theme === 'light' ? 'stroke-gray' : 'stroke-white'} `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className={`font-semibold text-[1.1rem]  ${theme === 'light' ? 'bg-white text-gray': 'bg-ebonyclaydark text-white placeholder:text-[#fff]'} w-full h-full focus:outline-none`} placeholder='Search for a country'
                     value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className={`flex flex-col items-center gap-y-1 cursor-pointer font-semibold px-4 focus:outline-none rounded-[0.3125rem] h-[3.5rem] w-[12.5rem] shadow-lg ${theme === 'light' ? 'bg-white shadow-slate-200/50 text-woodsmoke' : 'bg-ebonyclaydark shadow-slate-200/50 text-white'} mobile:mr-[9rem]`}>
                    <div onClick={()=> {handleRegionFilter('all'); setClicked(!isClicked)}} className='flex flex-row items-center self-start py-4 gap-7'>
                        Filter by Region
                        {!isClicked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </div>
                    <div className={`flex flex-col gap-y-[0.125rem] cursor-pointer font-semibold px-4 rounded-[0.3125rem] w-[12.5rem] shadow-lg ${theme === 'light' ? 'bg-white shadow-slate-200/50 text-woodsmoke' : 'bg-ebonyclaydark shadow-custom text-white'} py-2  ${!isClicked ? 'hidden': 'flex'}`}>
                        {regions.map( region => (
                            <div key={region.value} onClick={() => handleRegionFilter(region.value)}>{region.label}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Filters