import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import PaperIcon from '../assets/icon-paper.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';
import RockIcon from '../assets/icon-rock.svg';
import clsx from 'clsx';

const CONTROLS = {
    paper: { icon: PaperIcon, classNames: 'border-paper shadow-paper' },
    scissors: { icon: ScissorsIcon, classNames: 'border-scissors shadow-scissors' },
    rock: { icon: RockIcon, classNames: 'border-rock shadow-rock' }
};

export default function Control({ type, size, interactive, onSelect, className: additionalClassNames }) {
    const { icon, classNames: colorsClasses } = CONTROLS[type];
    const sizeClasses = useMemo(() => {
        if(size === 'large') return 'h-72 w-72 border-28'
        else if (size === 'small') return 'h-52 w-52 border-20'
    }, [size]);


    return (
        <div
            className={clsx(
                'bg-white rounded-full cursor-pointer flex items-center justify-center',
                interactive ? 'cursor-pointer' : 'cursor-auto',
                sizeClasses,
                additionalClassNames,
                colorsClasses,
            )}
            {...interactive && { onClick: () => onSelect(type) }}
        >
            <img src={icon} alt='Rock' className='w-16' />
        </div>
    )
}

Control.propTypes = {
    type: PropTypes.oneOf(['paper', 'scissors', 'rock']).isRequired,
    size: PropTypes.oneOf(['small', 'large']).isRequired,
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string
};

Control.defaultProps = {
    size: 'large',
    interactive: false,
    className: ''
};