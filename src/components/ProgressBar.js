import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((previousNumber) => {
        const newNumber = previousNumber + 1;
        if (newNumber >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return newNumber;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='wrapper'>
      <span
        className='progress-number'
        style={{
          color: percentage > 49 ? 'white' : 'black',
        }}
      >
        <span>{percentage}%</span>
      </span>

      <span
        className='progress-color'
        style={{
          width: `${percentage}%`,
        }}
      ></span>
    </div>
  );
};

export default ProgressBar;
