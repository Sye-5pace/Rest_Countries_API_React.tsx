import React from 'react'
import { FilterProps } from '../Interface';

const Filters: React.FC<FilterProps> = ({theme , value, setValue, handleRegionFilter }) => {
    

    return (
        <div>
            <section className='flex laptop:flex-row mobile:flex-col items-center justify-between laptop:h-[3.5rem] laptop:px-[4rem] mobile:mx-auto mobile:gap-y-6 relative top-[8rem]'>
                <div className={`pl-4 flex flex-row h-full mobile:h-[3.5rem] rounded-[0.3125rem]  gap-4 laptop:w-[30rem] mobile:w-[21.4375rem] ${theme === 'light' ? 'bg-white' : 'bg-ebonyclaydark'} items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={`w-6 h-6 ${theme === 'light' ? 'stroke-gray' : 'stroke-white'} `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className={`font-semibold text-[1.1rem]  ${theme === 'light' ? 'bg-white text-gray': 'bg-ebonyclaydark text-white placeholder:text-[#fff]'} w-full h-full focus:outline-none`} placeholder='Search for a country'
                     value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <select className={`cursor-pointer font-semibold px-4 focus:outline-none rounded-[0.3125rem] h-[3.5rem] w-[12.5rem] ${theme === 'light' ? 'bg-white text-woodsmoke' : 'bg-ebonyclaydark text-white'} mobile:mr-[9rem]`}
                 onChange={(e) => handleRegionFilter(e.target.value)}>
                    <option value="all">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </section>
        </div>
    );
}
export default Filters