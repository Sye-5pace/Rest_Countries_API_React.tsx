import React from 'react'
import Header from './Components/Header.tsx'

import './index.css'

const App: React.FC = () => {

  return (
    <>
      <div className='flex flex-col bg-alabaster p-0 m-0 border-box min-h-screen w-full'>
        <Header />
      </div>
    </>
  );
}

export default App