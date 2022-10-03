import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import Button from './common/Button';
import constants from '../constants';

export default function GameResult({ status, size = 'lg' }) {
  const handlePlayAgain = () => navigate('/');

  const textClasses = size === 'sm' ? 'text-3xl' : 'text-5xl ';
  const buttonClasses = size === 'sm' ? 'h-8 text-xs' : 'h-12';

  return (
    <>
      <h3 className={`uppercase mb-3 ${textClasses}`}>You {status}</h3>
      <Button className={`w-full hover:text-red-500 ${buttonClasses} `} onClick={handlePlayAgain}>
        Play Again
      </Button>
    </>
  );
}

GameResult.propTypes = {
  status: PropTypes.oneOf([constants.status.win, constants.status.lose]).isRequired,
  size: PropTypes.oneOf(['sm', 'lg'])
};

