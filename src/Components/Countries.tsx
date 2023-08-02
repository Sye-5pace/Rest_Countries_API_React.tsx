import React from 'react'
import { CountryData,CountriesProps } from '../Interface';


const Countries: React.FC<CountriesProps> = ({theme}) =>{

    return (
        <div className='h-full border-2 mx-[4rem]'>
            {'Countries goes here'}
        </div>
    );
}

export default Countries ;