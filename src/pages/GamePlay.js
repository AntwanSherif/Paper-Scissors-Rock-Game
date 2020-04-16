import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameResult from '../components/GameResult';
import GameControl from '../components/GameControl';
import constants from '../constants';

export default function GamePlay({ userSelection, onWin, onLose }) {
    const [houseSelection, setHouseSelection] = useState();

    // pick a random control
    useEffect(() => {
        const timer = setTimeout(() => {
            const availableOptions = Object.keys(constants.controls).filter(c => c !== userSelection);
            const newSelection = availableOptions[Math.floor(Math.random() * availableOptions.length)];

            setHouseSelection(newSelection);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // determine current game status
    const [gameStatus, setGameStatus] = useState();

    useEffect(() => {
        if (!houseSelection) return;

        const { controls, status } = constants;
        const { paper, scissors, rock } = controls;

        if ((userSelection === rock && houseSelection === scissors)
            || (userSelection === paper && houseSelection === rock)
            || (userSelection === scissors && houseSelection === paper)
        ) {
            setGameStatus(status.win);
            onWin();
        } else {
            setGameStatus(status.lose);
            onLose();
        }
    }, [userSelection, houseSelection, onWin, onLose]);



    return (
        <div className='w-1/2screen flex flex-1 items-stretch justify-between'>
            <div className='w-80 flex items-stretch justify-center order-first'>
                <GameControl title='You Picked' type={userSelection} />
            </div>
            <div className='w-80 flex items-stretch justify-center order-last'>
                <GameControl title='The House Picked' type={houseSelection} />
            </div>

            {gameStatus && (
                <div className='w-48 flex flex-none flex-col items-center justify-center'>
                    <GameResult status={gameStatus} />
                </div>
            )}
        </div>
    )
}

GamePlay.propTypes = {
    userSelection: PropTypes.oneOf(['paper', 'scissors', 'rock']).isRequired,
    onWin: PropTypes.func.isRequired,
    onLose: PropTypes.func.isRequired
}