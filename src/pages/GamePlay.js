import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import GameResult from '../components/GameResult';
import GameControl from '../components/GameControl';
import constants from '../constants';

const controlsArr = Object.keys(constants.controls); // game controls array
let index = 0; // current index of controlArr. Used to animate different controls

export default function GamePlay({ userSelection, onWin, onLose }) {
	const [randomSelection, setRandomSelection] = useState();
	const [houseSelection, setHouseSelection] = useState();
	const [isMobile, setIsMobile] = useState(true);

	// listen to screen size
	useEffect(() => {
		const updateSize = () => setIsMobile(window.innerWidth < 640);
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	// pick a random control
	useEffect(() => {
		// animate different controls
		const random = setInterval(() => {
			setRandomSelection(controlsArr[index]);
			index = index === controlsArr.length - 1 ? 0 : index + 1;
		}, 120);

		// pick a random control
		const timer = setTimeout(() => {
			const availableOptions = controlsArr.filter(c => c !== userSelection);
			const newSelection = availableOptions[Math.floor(Math.random() * availableOptions.length)];

			setHouseSelection(newSelection);

			clearInterval(random);
		}, 1500);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// determine current game status
	const [gameStatus, setGameStatus] = useState();

	useEffect(() => {
		if (!houseSelection) return;

		const { controls, status } = constants;
		const { paper, scissors, rock } = controls;

		if (
			(userSelection === rock && houseSelection === scissors) ||
			(userSelection === paper && houseSelection === rock) ||
			(userSelection === scissors && houseSelection === paper)
		) {
			setGameStatus(status.win);
			onWin();
		} else {
			setGameStatus(status.lose);
			onLose();
		}
	}, [userSelection, houseSelection, onWin, onLose]);

	// Animations
	const containerControls = useAnimation();
	const GameResultControls = useAnimation();

	useEffect(() => {
		if (gameStatus) {
			!isMobile && containerControls.start({ width: '60vw' });
			GameResultControls.start({ scale: 1.2 });
		}
	}, [containerControls, GameResultControls, gameStatus, isMobile]);

	if (isMobile) {
		return (
			<motion.div
				className='w-screen flex flex-1 flex-col'
				animate={containerControls}
				transition={{ ease: 'easeIn', duration: 0.2 }}
			>
				<div className='w-screen flex flex-1 items-stretch justify-between'>
					<div className='w-80 flex items-stretch justify-center'>
						<GameControl title='You Picked' type={userSelection} />
					</div>
					<div className='w-80 flex items-stretch justify-center'>
						<GameControl title='The House Picked' type={houseSelection || randomSelection} />
					</div>
				</div>

				{/**
				{gameStatus && (
					<motion.div
						className='w-48 flex flex-none flex-col items-center justify-center'
						initial={{ scale: 0 }}
						animate={GameResultControls}
						transition={{ ease: 'easeIn', duration: 0.5 }}
					>
						<GameResult status={gameStatus} />
					</motion.div>
                )}
                 */}
			</motion.div>
		);
	}

	return (
		<motion.div
			className='w-1/2screen flex flex-1 items-stretch justify-between'
			animate={containerControls}
			transition={{ ease: 'easeIn', duration: 0.2 }}
		>
			<div className='w-80 flex items-stretch justify-center order-first'>
				<GameControl title='You Picked' type={userSelection} />
			</div>
			<div className='w-80 flex items-stretch justify-center order-last'>
				<GameControl title='The House Picked' type={houseSelection || randomSelection} />
			</div>

			{gameStatus && (
				<motion.div
					className='w-48 flex flex-none flex-col items-center justify-center'
					initial={{ scale: 0 }}
					animate={GameResultControls}
					transition={{ ease: 'easeIn', duration: 0.5 }}
				>
					<GameResult status={gameStatus} />
				</motion.div>
			)}
		</motion.div>
	);
}

GamePlay.propTypes = {
	userSelection: PropTypes.oneOf(['paper', 'scissors', 'rock']).isRequired,
	onWin: PropTypes.func.isRequired,
	onLose: PropTypes.func.isRequired
};
