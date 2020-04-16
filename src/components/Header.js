import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/logo.svg';

export default function Header({ score }) {
    return (
        <header className='h-44 w-6/12 p-6 flex items-center justify-between border-4 border-header rounded-xl'>
            <img src={Logo} alt='Paper, Scissors, Rock Game Logo' />
            <div className='w-40 h-32 px-10 pt-5 flex flex-col items-center justify-center bg-white rounded-lg'>
                <div className='uppercase text-xl text-score'>Score</div>
                <div className='text-7xl font-bold text-dark -mt-6'>{score}</div>
            </div>
      </header>
    )
}

Header.propTypes = {
    score: PropTypes.number.isRequired
};