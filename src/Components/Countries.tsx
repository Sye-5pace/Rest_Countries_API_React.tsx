import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesProps,CountryData } from '../Interface';


const Countries: React.FC<CountriesProps> = ({ theme, data, searchValue, regionFilter}) =>{
    const filterCountries = ( countries: CountryData[] | null) => {
        if(!countries) return [];

        let filteredCountries = countries;

        //For HandleSearchCountry() function
        if(searchValue.trim() !== '' ) {
            filteredCountries = filteredCountries.filter((country) => 
                country.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        //For handleRegionFilter() function
        if( regionFilter !== 'all'){
            filteredCountries = filteredCountries.filter((country) =>
             country.region.toLowerCase() === regionFilter.toLowerCase()
            )
        }
        return filteredCountries
    }

    const filteredCountries = filterCountries(data);

    return (
        <div className='h-full  laptop:px-[4rem] mx-auto  grid laptop:grid-cols-4 mobile:grid-cols-1 mobile:mx-[2rem] gap-y-12 laptop:gap-x-[2rem] cursor-pointer pb-4 laptop:w-full'>
            {filteredCountries.map((country)=> (
                <Link to={`/country/${country.alpha3Code}`}
                      key={country.alpha3Code}  className={`h-[24rem] rounded-[0.3125rem] shadow-lg ${theme === 'light' ? 'text-woodsmoke bg-white shadow-slate-200/50' : 'text-white bg-ebonyclaydark shadow-custom'} pb-4 grid grid-rows-[55%_40%] gap-y-6`}>
                    <img className='object-cover object-center w-full h-full' src={country.flag} alt={`Flag of ${country.name}`} />
                    <div className='flex flex-col pb-2 gap-y-3'>
                        <h1 className={`${theme === 'light' ? 'text-woodsmoke' : 'text-white'} font-bold text-[1.15rem] ml-8`}>{country.name}</h1>
                        <div className='flex flex-col ml-8 gap-y-2'>
                            <h4>Population: <span className='font-thin'>{country.population.toLocaleString()}</span></h4>
                            <h4>Region: <span className='font-thin'>{country.region}</span></h4>
                            <h4>Capital: <span className='font-thin'>{country.capital}</span></h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Countries ;