import React from 'react'

const Header = ()=>{
    return (
        <>
            <div className='w-full  bg-white h-[4rem] flex flex-row' >
                <div className='w-full font-nunito text-woodsmoke flex flex-row justify-between items-center px-[4rem]'>
                    <h2 className='text-[1.25rem] font-extrabold'>Where in the world?</h2>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
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