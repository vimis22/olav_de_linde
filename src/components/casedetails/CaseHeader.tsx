import NormalText from '../textual/NormalText.tsx';
import CaseProgressIndicator from '../progress/CaseProgressIndicator.tsx';
import {calenderIcon, locationIcon, screwDriverIcon, tickMarkIcon, userIcon} from '../../styling/GlobalStyles.tsx';
import React from 'react';

interface CaseHeaderProps {
  title: string;
  statusStep: number;
  status: string;
}
const CaseHeader: React.FC<CaseHeaderProps> =  ({ title, statusStep, status }) => (
  <>
    <NormalText text={title} fontSize={22} fontWeight="bold" />
    <CaseProgressIndicator step={statusStep} icon1={locationIcon} icon2={userIcon} icon3={calenderIcon} icon4={screwDriverIcon} icon5={tickMarkIcon} />
    <NormalText text={status} fontSize={15} fontWeight="600" />
  </>
);

export default CaseHeader;
