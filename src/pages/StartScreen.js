import React from 'react';
import PropTypes from 'prop-types';
import Triangle from '../assets/bg-triangle.svg';
import Control from '../components/common/Control';
import constants from '../constants';

export default function StartScreen({ onSelect }) {
	return (
		<div className='flex flex-1 items-center'>
			<div className='relative'>
				<Control
					interactive
					size='small'
					type={constants.controls.paper}
					className='absolute -top-12 -left-12 sm:-top-24 sm:-left-24'
					onSelect={onSelect}
				/>
				<Control
					interactive
					size='small'
					type={constants.controls.scissors}
					className='absolute -top-12 -right-12 sm:-top-24 sm:-right-20'
					onSelect={onSelect}
				/>
				<Control
					interactive
					size='small'
					type={constants.controls.rock}
					className='absolute top-28 right-8 sm:top-40 sm:right-14'
					onSelect={onSelect}
				/>

				<img src={Triangle} alt='triangle' className='w-48 sm:w-auto' />
			</div>
		</div>
	);
}

StartScreen.propTypes = {
	onSelect: PropTypes.func.isRequired
};
