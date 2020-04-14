import React from 'react';
import PropTypes from 'prop-types';
import PaperIcon from '../assets/icon-paper.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';
import RockIcon from '../assets/icon-rock.svg';

const CONTROLS = {
    paper: { icon: PaperIcon, classNames: 'border-paper shadow-paper' },
    scissors: { icon: ScissorsIcon, classNames: 'border-scissors shadow-scissors' },
    rock: { icon: RockIcon, classNames: 'border-rock shadow-rock' }
};

export default function Control({ type, className: additionalClassNames = '' }) {
    const { icon, classNames } = CONTROLS[type];

    return (
        <div className={`h-48 w-48 bg-white border-20 rounded-full flex items-center justify-center ${additionalClassNames} ${classNames}`}>
            <img src={icon} alt='Rock' className='w-16' />
        </div>
    )
}

Control.propTypes = {
    type: PropTypes.oneOf(['paper', 'scissors', 'rock']).isRequired,
    className: PropTypes.string
};