import React from 'react';
import Logo from '../logo.svg';

export default function Header() {
    return (
        <header className='h-44 w-6/12 p-6 flex items-center justify-between border-4 border-header rounded-xl'>
            <img src={Logo} alt='Paper, Scissors, Rock Game Logo' />
            <div className='w-44 h-32 px-10 pt-5 flex flex-col items-center justify-center bg-white rounded-lg'>
                <div className='text-xl text-score'>Score</div>
                <div className='text-7xl font-bold text-dark -mt-6'>0</div>
            </div>
      </header>
    )
}