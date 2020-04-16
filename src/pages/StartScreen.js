import React from 'react';
import PropTypes from 'prop-types';
import Triangle from '../assets/bg-triangle.svg';
import Control from '../components/Control';
import constants from '../constants';

export default function StartScreen({ onSelect }) {
    return (
        <div className='flex flex-1 items-center'>
            <div className='relative'>
                <Control interactive size='small' type={constants.paper}    className='absolute -top-24 -left-24'  onSelect={onSelect} />
                <Control interactive size='small' type={constants.scissors} className='absolute -top-24 -right-20' onSelect={onSelect} />
                <Control interactive size='small' type={constants.rock}     className='absolute top-40 right-14'   onSelect={onSelect} />

                <img src={Triangle} alt='triangle' />
            </div>
        </div>
    )
}

StartScreen.propTypes = {
    onSelect: PropTypes.func.isRequired
}