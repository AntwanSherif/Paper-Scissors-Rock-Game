import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import Button from './common/Button';
import constants from '../constants';

export default function GameResult({ status }) {
    const handlePlayAgain = () => navigate('/');

    return (
        <>
            <h3 className='uppercase text-5xl mb-3'>You {status}</h3>
            <Button className='h-12 w-full hover:text-red-500' onClick={handlePlayAgain}>Play Again</Button>
        </>
    )
}

GameResult.propTypes = {
    status: PropTypes.oneOf([constants.status.win, constants.status.lose]).isRequired,
}