import React from 'react'
import { CountriesProps } from '../Interface';


const Countries: React.FC<CountriesProps> = ({theme,data}) =>{

    return (
        <div className='h-full  mx-[4rem]  grid grid-cols-4 gap-y-8 gap-x-9 cursor-pointer pb-4'>
            {data?.map((country)=> (
                <div className={`w-[20rem] h-[25rem] rounded-[0.3125rem] ${theme === 'light' ? 'text-woodsmoke bg-white' : 'text-white bg-ebonyclaydark'} pb-4 grid grid-rows-[55%_40%] gap-y-6`}>
                    <img className='object-cover object-center w-full h-full' src={country.flag} alt={`Flag of ${country.name}`} />
                    <div className='flex flex-col pb-2 gap-y-3'>
                        <h1 className={`${theme === 'light' ? 'text-woodsmoke' : 'text-white'} font-bold text-[1.15rem] ml-8`}>{country.name}</h1>
                        <div className='flex flex-col ml-8 gap-y-2'>
                            <h4>Population:<span className='font-thin'>{country.population}</span></h4>
                            <h4>Region:<span className='font-thin'>{country.region}</span></h4>
                            <h4>Capital:<span className='font-thin'>{country.capital}</span></h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Countries ;