import React, { Dispatch, SetStateAction, } from 'react';
import {
    DetailedIconArrayObject,
} from './iconArrayGeneration';
import {
    isFirstIcon,
    isLastIcon,
    isTheIconToTheLeftClicked,
    isTheIconToTheRightClicked,
} from './helperFunctions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type clickHandlerArguments = {
    count: number,
    detailedIconArray:DetailedIconArrayObject[],
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number,
    icon: DetailedIconArrayObject,
    setCount: Dispatch<SetStateAction<number>>
    setDetailedIconArray:Dispatch<SetStateAction<DetailedIconArrayObject[]>>
};

type skillListItems = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
    setTalentPathDetailedIconArray:Dispatch<SetStateAction<DetailedIconArrayObject[]>>,
    talentPathDetailedIconArray: DetailedIconArrayObject[],
    talentPathName: string,
};

const handleLeftClick = ({
    count,
    detailedIconArray,
    event,
    i,
    icon,
    setCount,
    setDetailedIconArray,
}: clickHandlerArguments) => {
    if (   isFirstIcon(i)
        || isTheIconToTheLeftClicked(i,detailedIconArray)) {
      if (   count < 6
          && icon.iconClicked === false) {
            setCount(count + 1)
            icon.iconClicked = true;
            detailedIconArray[i] = icon;
            setDetailedIconArray(detailedIconArray);
      }
      else if (icon.iconClicked === false){
        toast("You are out of runes! If you want to change your skills, right click arleady used runes to remove them. Once removed, you will be able to add other skills!", {
            autoClose: 10000,
        });
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

const handleRightClick = ({
    count,
    detailedIconArray,
    event,
    i,
    icon,
    setCount,
    setDetailedIconArray,
}: clickHandlerArguments) => {
    event.preventDefault();

    if (   isLastIcon(i, detailedIconArray)
        || isTheIconToTheRightClicked(i, detailedIconArray) === false)
    {
            if (   count > 0
                && icon.iconClicked) {
              setCount(count - 1)
              icon.iconClicked = false;
              detailedIconArray[i] = icon;
              setDetailedIconArray(detailedIconArray);
            }
    }

};

function SkillsList({
    count,
    setCount,
    setTalentPathDetailedIconArray,
    talentPathDetailedIconArray,
    talentPathName,
}: skillListItems)
{
    return (
    <div className='skill-list-container'>
        <div className="talent-path-container" >
            <p>{talentPathName}</p>
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
                                count,
                                detailedIconArray: talentPathDetailedIconArray,
                                event,
                                i,
                                icon,
                                setCount,
                                setDetailedIconArray: setTalentPathDetailedIconArray,
                            })
                        }
                        onContextMenu={
                            event =>
                            handleRightClick({
                                count,
                                detailedIconArray: talentPathDetailedIconArray,
                                event,
                                i,
                                icon,
                                setCount,
                                setDetailedIconArray: setTalentPathDetailedIconArray,
                            })
                        }
                    >
                        <img className={`${icon?.iconClicked? "active-border" : "inactive-border"} img`}
                            onMouseOver={(event) => {handleMouseOver(event, icon)}}
                            onMouseOut={(event) => {handleMouseOut(event, icon)}}
                            src={icon.iconClicked? icon.icon : icon.iconFaded} alt=""
                        />
                        {  isLastIcon(i, talentPathDetailedIconArray)?
                        <div className='non-bar'></div>
                        :
                         <div className={`${icon?.iconClicked && isTheIconToTheRightClicked(i, talentPathDetailedIconArray) ? "active" : "inactive"} bar`}></div>
                        }
                    </div>
                );
            })
        }
    </div>
)};


export default SkillsList;