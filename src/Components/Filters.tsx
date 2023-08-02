import React from 'react'

interface FilterProps {
    theme: string
}

const Filters: React.FC<FilterProps> = ({theme}) => {
    
    

    return (
        <div>
            <section className='flex flex-row items-center justify-between h-[3.5rem] px-[4rem]'>
                <div className={`pl-4 flex flex-row h-full rounded-[0.3125rem]  gap-4 w-[30rem] ${theme === 'light' ? 'bg-white' : 'bg-ebonyclaydark'} items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={`w-6 h-6 ${theme === 'light' ? 'stroke-gray' : 'stroke-white'} `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className={`font-semibold text-[1.1rem] ${theme === 'light' ? 'bg-white text-gray': 'bg-ebonyclaydark text-white'} w-full h-full focus:outline-none`} placeholder='Search for a country'/>
                </div>
                <select className={`cursor-pointer font-semibold pl-4 pr-2 focus:outline-none rounded-[0.3125rem] h-[3.5rem] w-[12.5rem] ${theme === 'light' ? 'bg-white text-woodsmoke' : 'bg-ebonyclaydark text-white'}`}>
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