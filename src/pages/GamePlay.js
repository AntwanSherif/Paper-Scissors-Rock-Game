import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Control from '../components/Control';
import constants from '../constants';

function VSControl({ title, type }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='uppercase text-3xl tracking-wider mb-16'>{title}</div>
            <div className='flex flex-1 items-center'>
                {type
                    ? <Control type={type} className='' />
                    : <div className='bg-black opacity-25 h-52 w-52 rounded-full '></div>
                }
            </div>
        </div>
    )
};

export default function GamePlay({ userSelection, onWin, onLose }) {
    const [houseSelection, setHouseSelection] = useState();

    // pick a random control
    useEffect(() => {
        const timer = setTimeout(() => {
            const availableOptions = constants.controls.filter(c => c !== userSelection);
            const newSelection = availableOptions[Math.floor(Math.random() * availableOptions.length)];

            setHouseSelection(newSelection);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className='w-1/2screen flex flex-1 items-stretch justify-between'>
            <div className='w-80 flex items-stretch justify-center'>
                <VSControl title='You Picked' type={userSelection} />
            </div>
            <div className='w-80 flex items-stretch justify-center'>
                <VSControl title='The House Picked' type={houseSelection} />
            </div>
        </div>
    )
}

GamePlay.propTypes = {
    userSelection: PropTypes.oneOf(['paper', 'scissors', 'rock']).isRequired,
    onWin: PropTypes.func.isRequired,
    onLose: PropTypes.func.isRequired
}