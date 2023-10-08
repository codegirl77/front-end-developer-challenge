import React, { useState, Dispatch, SetStateAction, } from 'react';
import {
  buildDetailedIconArray,
  DetailedIconArrayObject,
  talentPathOneIconArray,
  talentPathTwoIconArray,
}
from './iconArrayGeneration';
import SkillsList from './SkillsList'
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [talentPathOneDetailedIconArray, setTalentPathOneDetailedIconArray] = useState<DetailedIconArrayObject[]>(buildDetailedIconArray(talentPathOneIconArray));
  const [talentPathTwoDetailedIconArray, setTalentPathTwoDetailedIconArray] = useState<DetailedIconArrayObject[]>(buildDetailedIconArray(talentPathTwoIconArray));
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <SkillsList 
              talentPathDetailedIconArray={talentPathOneDetailedIconArray}
              setTalentPathDetailedIconArray={setTalentPathOneDetailedIconArray}
              count={count}
              setCount={setCount}
          />
        </div>
        <div className='container'>
          <SkillsList 
              talentPathDetailedIconArray={talentPathTwoDetailedIconArray}
              setTalentPathDetailedIconArray={setTalentPathTwoDetailedIconArray}
              count={count}
              setCount={setCount}
          />
        </div>
        <div className='count-container'>
          Talent Points {count}/6
        </div>
      </header>
    </div>
  );
}

export default App;
