import {electricityIcon, hammerIcon, paintingIcon, waterIcon} from '../../styling/GlobalStyles.tsx';

/**
 * OptionButton values for Technicians.
 * @type {Array} - Return technician-values based on defined key.
 */
const TechnicianValues = [
  { key: '1', value: 'VICEVÆRT', icon: paintingIcon },
  { key: '2', value: 'VVS', icon: waterIcon},
  { key: '3', value: 'ELEKTRIKER', icon: electricityIcon },
  { key: '4', value: 'TØMRER', icon: hammerIcon },
];

export default TechnicianValues;
