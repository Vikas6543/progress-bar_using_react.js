import React, { useEffect, useState } from 'react';

const ProgressBar = ({ skill }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((previousNumber) => {
        const newNumber = previousNumber + 1;
        if (newNumber >= skill.percentage) {
          clearInterval(intervalId);
          return skill.percentage;
        }
        return newNumber;
      });
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className='main-wrapper'>
      <div>
        <h3>{skill.name}</h3>
      </div>
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
    </main>
  );
};

export default ProgressBar;
