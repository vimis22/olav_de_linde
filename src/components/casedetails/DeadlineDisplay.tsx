import InputFieldArea from '../textual/InputFieldArea.tsx';
import {calenderIcon} from '../../styling/GlobalStyles.tsx';
import React from 'react';
/**
 * This is a DeadlineDisplay component.
 * @DeadlineDisplayProps - defines the properties of the box.
 * @DeadlineDisplay - Is the component, that recieves props as parameters and returns a styled box.
 */
interface DeadlineDisplayProps {
  deadline: any,
  formatDate: (Date: any) => string;
}
const DeadlineDisplay: React.FC<DeadlineDisplayProps> = ({ deadline, formatDate }) => (
  <InputFieldArea fieldIcon={calenderIcon} fieldIconBackground="#D8D8CE" fieldIconSize={28} textColor="#000000" placeholder={formatDate(deadline)} value={formatDate(deadline)}
                  onChangeText={() => {}} containerHeight={48} containerRadius={18} whenPassword={false} editable={false} />
);

export default DeadlineDisplay;
