import React from 'react';
import { useParams,Link,Route } from 'react-router-dom';
import { PreviewerProps } from '../Interface';

const Previewer: React.FC<PreviewerProps> = ({data,theme})=> {
    const { alpha3Code }: { alpha3Code: string } = useParams();
    
    const country = data?.find((country) => country.alpha3Code === alpha3Code);

    if(!country){
        return <div>Country not found</div>
    }

    const borderCountryNames = country.borders.map((borderCode) => {
        const borderCountry = data?.find((c) => c.alpha3Code === borderCode);
        return borderCountry?.name || borderCode;
    })

    return(
        <>
            <div className={`${theme === 'light' ? 'text-woodsmoke' : 'text-white'} mx-[4rem] flex flex-col gap-y-12`}>
                <Link to={'/'} >
                    <div className={`w-[8.5rem] h-[2.5rem] flex flex-row items-center justify-center gap-3 ${theme === 'light' ? 'bg-white' : 'bg-ebonyclaydark'} rounded-[0.375rem]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${theme === 'light' ? 'stroke-woodsmoke' : 'stroke-white'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span className='font-semibold'>Back</span>
                    </div>
                </Link>
                <section className='flex flex-row justify-between border-2 item-center children:border-2'>
                    <img className='w-[35rem] h-[30.187rem] object-cover object-center' src={country.flag}/>
                    <div className='flex flex-col h-[20.175rem] gap-y-6 self-center'>
                        <h1 className='font-bold text-[2rem]'>{country.name}</h1>
                        <div className='flex flex-row gap-[15rem]'>
                            <div className='flex flex-col gap-2'>
                                <h4>Native Name: <span className='font-thin'>{country.nativeName}</span></h4>
                                <h4>Population: <span className='font-thin'>{country.population}</span></h4>
                                <h4>Region: <span className='font-thin'>{country.region}</span></h4>
                                <h4>Sub Region: <span className='font-thin'>{country.subregion}</span></h4>
                                <h4>Capital: <span className='font-thin'>{country.nativeName}</span></h4>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4>Top Level Domain: <span className='font-thin'>{country.topLevelDomain}</span></h4>
                                <h4>Currencies: <span className='font-thin'>{country.currencies[0].name}</span></h4> 
                                <h4>Languages: <span className='font-thin'>{country.languages[0].name}</span></h4>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <h4 className='font-semibold w-[12rem]'>Border Countries:</h4>
                            <div className='flex flex-wrap w-full gap-2'>
                                {borderCountryNames.map((borderName) => (
                                    <div key={borderName}
                                    className={`px-2 py-[0.18rem] border-2 rounded-[0.25rem] cursor-pointer ${
                                        theme === 'light' ? 'bg-white text-woodsmoke' : 'bg-ebonyclaydark text-white'
                                    }`}>
                                        {borderName}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Previewer;