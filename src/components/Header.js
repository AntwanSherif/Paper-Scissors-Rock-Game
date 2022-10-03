import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import Logo from '../assets/logo.svg';
import usePrevious from '../utils/custom-hooks/usePrevious';

export default function Header({ score }) {
  const controls = useAnimation();
  const prevScore = usePrevious(score);

  useEffect(() => {
    if (typeof prevScore !== 'undefined' && prevScore !== score) {
      const textColor = 'hsl(148, 48%, 43%)';
      const originalColor = 'hsl(229, 25%, 31%)';

      controls.start({
        scale: [1, 1.4, 1],
        transition: { duration: 0.5 },
        color: [originalColor, textColor, originalColor]
      });
    }
  }, [prevScore, score, controls]);

  return (
    <header className='h-32 sm:h-48 w-11/12 sm:w-6/12 p-6 flex items-center justify-between border-4 border-header rounded-xl'>
      <img src={Logo} alt='Paper, Scissors, Rock Game Logo' className='h-32' />
      <div className='h-24 sm:h-40 w-24 sm:w-40 px-10 pt-5 flex flex-col items-center justify-center bg-white rounded-lg'>
        <div className='uppercase text-lg sm:text-xl text-score'>Score</div>
        <motion.div className='text-6xl sm:text-7xl font-bold text-dark -mt-6' animate={controls}>
          {score}
        </motion.div>
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired
};

