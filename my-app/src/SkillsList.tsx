import React, { useState, Dispatch, SetStateAction, } from 'react';
import {
    DetailedIconArrayObject,
} from './iconArrayGeneration';

type clickHandlerArguments = {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
    icon: DetailedIconArrayObject, 
    i: number, 
    detailedIconArray:DetailedIconArrayObject[], 
    setDetailedIconArray:Dispatch<SetStateAction<DetailedIconArrayObject[]>>
    count: number,
    setCount: Dispatch<SetStateAction<number>>
};

type skillListItems = {
    talentPathDetailedIconArray: DetailedIconArrayObject[],
    setTalentPathDetailedIconArray:Dispatch<SetStateAction<DetailedIconArrayObject[]>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>
};

const isIndexZero = (i : number) => {
    return i === 0;
};
const isTheIconToTheLeftClicked = (i: number, detailedIconArray: DetailedIconArrayObject[]) => {
    return detailedIconArray[i-1]?.iconClicked;
};

const isLastIcon = (i: number, detailedIconArray: DetailedIconArrayObject[]) => {
    return i === detailedIconArray.length - 1;
};

const handleLeftClick = ({event, icon, i, detailedIconArray, setDetailedIconArray, count, setCount}: clickHandlerArguments) => {
    if (   isIndexZero(i)
        || isTheIconToTheLeftClicked(i,detailedIconArray)) {
      if (   count < 6
          && icon.iconClicked === false) {
            setCount(count + 1)
            icon.iconClicked = true;
            detailedIconArray[i] = icon;
            setDetailedIconArray(detailedIconArray);
      }
      else {
        console.log("You are out of runes! If you want to change your skills, right click arleady used runes to remove them. Once removed, you will be able to add other skills")
      }
    }
  };

const handleRightClick = ({
    event, 
    icon, 
    i, 
    detailedIconArray, 
    setDetailedIconArray, 
    count, 
    setCount
}: clickHandlerArguments) => {
    event.preventDefault();

    if (   isIndexZero(i)
        || isTheIconToTheLeftClicked(i,detailedIconArray)) {
            if (   count > 0
                && icon.iconClicked) {
              setCount(count - 1)
              icon.iconClicked = false;
              detailedIconArray[i] = icon;
              setDetailedIconArray(detailedIconArray);
            }
    }
};

const handleMouseOver = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>, 
    icon: DetailedIconArrayObject
) => {
    const { currentTarget } = event;

    currentTarget.src = icon.icon;
};

const handleMouseOut = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>, 
    icon: DetailedIconArrayObject
) => {
    const { currentTarget } = event;

    icon.iconClicked? currentTarget.src = icon.icon : currentTarget.src = icon.iconFaded;
};

function SkillsList({
    talentPathDetailedIconArray, 
    setTalentPathDetailedIconArray,
    count,
    setCount,
}: skillListItems)
{
    return (<div className='container'>
        <div className="talentPathContainer" >
            <p > Talent Path 1</p>
        </div>
        {talentPathDetailedIconArray.map((icon: DetailedIconArrayObject, i: number) => 
            {
                return (
                    <div
                        key = {i} 
                        className="skill-container" 
                        onClick={
                            event => 
                            handleLeftClick({
                                event, 
                                icon, 
                                i, 
                                detailedIconArray: talentPathDetailedIconArray, 
                                setDetailedIconArray: setTalentPathDetailedIconArray, 
                                count, 
                                setCount
                            })
                        } 
                        onContextMenu={
                            event => 
                            handleRightClick({
                                event, 
                                icon, 
                                i, 
                                detailedIconArray: talentPathDetailedIconArray, 
                                setDetailedIconArray: setTalentPathDetailedIconArray, 
                                count, 
                                setCount
                            })
                        }  
                    >
    
                        <img className={`${icon?.iconClicked? "active-boarder" : "inactive"} img`}
                            onMouseOver={(event) => {handleMouseOver(event, icon)}} 
                            onMouseOut={(event) => {handleMouseOut(event, icon)}} 
                            src={icon.iconClicked? icon.icon : icon.iconFaded} alt=""
                        />
                        {isLastIcon(i, talentPathDetailedIconArray)?
                        <div className='nonbar'></div>
                        :
                         <div className={`${icon?.iconClicked? "active" : "inactive"} bar`}></div>
                        }
                    </div>
                );
            })
        }
    </div>
)};


export default SkillsList;