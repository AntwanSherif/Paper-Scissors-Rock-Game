import { useEffect, useState } from 'react';

let index = 0;

export function usePickRandom({ allControls, userSelection }) {
  const [animatedSelection, setAnimatedSelection] = useState(null);
  const [houseSelection, setHouseSelection] = useState();

  useEffect(() => {
    const interval = 120;

    // randomize the control for animation purposes
    const random = setInterval(() => {
      setAnimatedSelection(allControls[index]);

      const nextIndex = index === allControls.length - 1 ? 0 : index + 1;
      index = nextIndex;
    }, interval);

    // pick a random control
    const timer = setTimeout(() => {
      const availableOptions = allControls.filter(c => c !== userSelection);
      const newSelection = availableOptions[Math.floor(Math.random() * availableOptions.length)];

      setHouseSelection(newSelection);

      clearInterval(random);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { animatedSelection, houseSelection };
}

