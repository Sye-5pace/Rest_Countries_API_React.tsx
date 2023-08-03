import React from 'react'
import { CountriesProps } from '../Interface';


const Countries: React.FC<CountriesProps> = ({theme,data}) =>{

    return (
        <div className='h-full border-2 mx-[4rem]'>
            {'Countries goes here'}
        </div>
    );
}

export default Countries ;