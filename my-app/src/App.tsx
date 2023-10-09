import React, { useState, Dispatch, SetStateAction, } from 'react';
import {
  buildDetailedIconArray,
  DetailedIconArrayObject,
  talentPathOneIconArray,
  talentPathTwoIconArray,
  talentPathOneName,
  talentPathTwoName
}
from './iconArrayGeneration';
import SkillsList from './SkillsList'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [talentPathOneDetailedIconArray, setTalentPathOneDetailedIconArray] = useState<DetailedIconArrayObject[]>(buildDetailedIconArray(talentPathOneIconArray));
  const [talentPathTwoDetailedIconArray, setTalentPathTwoDetailedIconArray] = useState<DetailedIconArrayObject[]>(buildDetailedIconArray(talentPathTwoIconArray));
  
  return (
    <div className="app">
      <ToastContainer/>
      <header className="app-header">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </header>
      <div className='body-container'>
        <div className='skill-list-input-container'>
          <SkillsList 
            count={count}
            setCount={setCount}
            setTalentPathDetailedIconArray={setTalentPathOneDetailedIconArray}
            talentPathDetailedIconArray={talentPathOneDetailedIconArray}
            talentPathName= {talentPathOneName}
          />
          <SkillsList 
            count={count}
            setCount={setCount}
            setTalentPathDetailedIconArray={setTalentPathTwoDetailedIconArray}
            talentPathDetailedIconArray={talentPathTwoDetailedIconArray}
            talentPathName= {talentPathTwoName}
          />
        </div>
        <div className='count-container'>
          <div className='count'>{count} / 6</div>
          <div className='points-spent'>Points Spent</div>
        </div>
      </div>
    </div>
  );
}

export default App;
