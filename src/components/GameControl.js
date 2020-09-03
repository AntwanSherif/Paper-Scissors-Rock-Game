import React from 'react';
import PropTypes from 'prop-types';
import Control from './common/Control';
import constants from '../constants';

export default function GameControl({ title, type }) {
	return (
		<div className='flex flex-col items-center'>
			<div className='uppercase text-1xl sm:text-3xl tracking-wider mt-8 sm:mb-16 order-last sm:order-first'>{title}</div>
			<div className='flex flex-1 items-center order-first sm:order-last'>
				{type ? <Control type={type} className='' /> : <div className='bg-black opacity-25 h-52 w-52 rounded-full '></div>}
			</div>
		</div>
	);
}

GameControl.propTypes = {
	title: PropTypes.func.isRequired,
	type: PropTypes.oneOf([constants.controls.paper, constants.controls.scissors, constants.controls.rock]).isRequired
};
