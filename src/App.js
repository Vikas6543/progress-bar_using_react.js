import React from 'react';
import ProgressBar from './components/ProgressBar';

const skills = [
  {
    name: 'Html/Css',
    percentage: 96,
  },
  {
    name: 'JavaScript',
    percentage: 80,
  },
  {
    name: 'ReactJS',
    percentage: 68,
  },
  {
    name: 'NodeJS',
    percentage: 54,
  },
];

const App = () => {
  return (
    <div>
      <h3 className='heading'>Progress Bar</h3>
      {skills.map((skill, index) => (
        <ProgressBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default App;
