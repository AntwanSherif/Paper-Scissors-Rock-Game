import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import PaperIcon from '../../assets/icon-paper.svg';
import ScissorsIcon from '../../assets/icon-scissors.svg';
import RockIcon from '../../assets/icon-rock.svg';
import clsx from 'clsx';
import constants from '../../constants';

const CONTROLS = {
    paper: { icon: PaperIcon, classNames: 'border-paper shadow-paper' },
    scissors: { icon: ScissorsIcon, classNames: 'border-scissors shadow-scissors' },
    rock: { icon: RockIcon, classNames: 'border-rock shadow-rock' }
};

export default function Control({ type, size, interactive, onSelect, className: additionalClassNames }) {
    const { icon, classNames: colorsClasses } = CONTROLS[type];
    const sizeClasses = useMemo(() => {
        if (size === constants.sizes.large) return 'h-72 w-72 border-28'
        else if (size === constants.sizes.small) return 'h-52 w-52 border-20'
    }, [size]);


    return (
        <motion.div
            {...interactive && { whileHover: { scale: 1.1 } }}
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
        </motion.div>
    )
}

Control.propTypes = {
    type: PropTypes.oneOf([
        constants.controls.paper,
        constants.controls.scissors,
        constants.controls.rock,
    ]).isRequired,
    size: PropTypes.oneOf([constants.sizes.small, constants.sizes.large]).isRequired,
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string
};

Control.defaultProps = {
    size: 'large',
    interactive: false,
    className: ''
};