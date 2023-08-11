import React from 'react'
import { useDispatch } from 'react-redux';
import { setTheme } from '../Store/Store.ts';
import { ThemeSwitcherProps } from '../Interface.ts';


const Header: React.FC<ThemeSwitcherProps> = ({theme,setStoreTheme})=>{
    const dispatch = useDispatch();

    const handleThemeToggler = ():void=>{
        const newTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        localStorage.setItem('theme', newTheme);
        setStoreTheme(newTheme)
    }

    return (
        <>
            <div className={`laptop:w-full shadow-lg ${ theme === 'light' ? 'bg-white shadow-slate-200/50': 'bg-ebonyclaydark shadow-custom'} laptop:h-[4rem] mobile:h-[5rem] flex flex-row py-6 fixed `}>
                <div className={`laptop:w-full font-nunito ${theme === 'light'? 'text-woodsmoke' : 'text-white'}  flex flex-row justify-between items-center laptop:px-[4rem] mobile:mx-auto mobile:gap-16`}>
                    <h2 className='laptop:text-[1.25rem] mobile:text-[0.875rem] font-extrabold'>Where in the world?</h2>
                    <div className='flex gap-2'>
                        <svg onClick={handleThemeToggler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 cursor-pointer ${theme === 'light' ? 'fill-none' : 'fill-white'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>                   
                        <p className='font-medium '>Dark Mode</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;