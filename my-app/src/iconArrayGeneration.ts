import birthdayCake from './assets/birthdayCake.png';
import birthdayCakeFaded from './assets/birthdayCakeFaded.png';
import crown from './assets/crown.png';
import crownFaded from './assets/crownFaded.png';
import forkAndKnive from './assets/forkAndKnive.png';
import forkAndKniveFaded from './assets/forkAndKniveFaded.png';
import lightningBolt from './assets/lightningBolt.png';
import lightningBoltFaded from './assets/lightningBoltFaded.png';
import ship from './assets/ship.png';
import shipFaded from './assets/shipFaded.png';
import skull from './assets/skull.png';
import skullFaded from './assets/skullFaded.png';
import snorkleGear from './assets/snorkleGear.png';
import snorkleGearFaded from './assets/snorkleGearFaded.png';
import stack from './assets/stack.png';
import stackFaded from './assets/stackFaded.png';

const birthdayCakeIconsArray: string[]  = [birthdayCake, birthdayCakeFaded];
const crownIconsArray: string[]         = [crown, crownFaded];
const forkAndKniveIconsArray: string[]  = [forkAndKnive, forkAndKniveFaded];
const lightningBoltIconsArray: string[] = [lightningBolt, lightningBoltFaded];
const shipIconsArray: string[]          = [ship, shipFaded];
const skullIconsArray: string[]         = [skull, skullFaded];
const snorkleGearIconsArray: string[]   = [snorkleGear, snorkleGearFaded];
const stackIconsArray: string[]         = [stack, stackFaded];

export type DetailedIconArrayObject  = {
  icon: string,
  iconFaded: string,
  iconClicked: boolean,
};

export const buildDetailedIconArray = (iconArray: string[][] ) => {
  const detailedIconArray: DetailedIconArrayObject[] = [];

  iconArray.forEach((icons:string[]) => {
    const icon: string = icons[0];
    const iconFaded: string = icons[1];
  
    const detailedIconObject: DetailedIconArrayObject = {
      icon,
      iconFaded,
      iconClicked: false,
    };
  
    detailedIconArray.push(detailedIconObject);
  });

  return detailedIconArray;
};

export const talentPathOneIconArray: string[][] = [
  stackIconsArray,
  forkAndKniveIconsArray,
  birthdayCakeIconsArray, 
  crownIconsArray,
];

export const talentPathTwoIconArray: string[][] = [
  shipIconsArray,
  snorkleGearIconsArray,
  lightningBoltIconsArray,
  skullIconsArray,
];