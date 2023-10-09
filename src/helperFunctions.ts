import {
    DetailedIconArrayObject,
} from './iconArrayGeneration';

export const isFirstIcon = (i : number) => {
    return i === 0;
};

export const isLastIcon = (i: number, detailedIconArray: DetailedIconArrayObject[]) => {
    return i === detailedIconArray.length - 1;
};

export const isTheIconToTheLeftClicked = (i: number, detailedIconArray: DetailedIconArrayObject[]) => {
    return detailedIconArray[i-1]?.iconClicked;
};

export const isTheIconToTheRightClicked = (i: number, detailedIconArray: DetailedIconArrayObject[]) => {
    return detailedIconArray[i+1]?.iconClicked;
};