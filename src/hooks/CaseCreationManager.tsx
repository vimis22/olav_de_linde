import {Alert} from 'react-native';
import {useState} from 'react';
import {updateCaseByDescription} from '../functions/crud-operations/entities/case/CaseUpdate.tsx';
import {createCase} from '../functions/crud-operations/entities/case/CaseCreate.tsx';
import {useStackNavigation} from './useStackNavigation.tsx';

export const useCaseManager = (navigation: any, initialParams?: any) => {
  const [modalState, setModalState] = useState<'question' | 'acuteEmployee'>('question');
  const [enablePopup, setEnablePopup] = useState(true);
  const [selectedTechnician, setSelectedTechnician] = useState<string>('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {handleNavigation, confirmNavigation, cancelNavigation, attemptNavigation, handleHomeNavigation, showExitConfirmation, pendingNavigation} = useStackNavigation(navigation, setNotificationsEnabled);

  //Important to remind, that the values here are called in the intiialparams.
  //This means, that when we call the navigation method belowin CaseTechnicians, then we equal it to useCaseManager while calling the navigation and params inside.
  const { title = '', description = '', caseId = null } = initialParams || {};

  const handleBackPress = () => {
    setModalState('question');
  };

  const handleTechnicianSelect = (value: string) => {
    setSelectedTechnician(value);
  };
  const manageCollectionOfCaseInfo = async () => {
    try {
      if (!title || !description || !selectedTechnician) {
        Alert.alert('Please fill in all the fields');
        return;
      }

      setIsLoading(true);

      if (caseId) {
        console.log('Updating existing case with ID:', caseId);

        const updatedDescription = `${description} Assigned to: ${selectedTechnician}`;
        await updateCaseByDescription(caseId, updatedDescription);
        console.log('Case updated with technician info');
      } else {
        console.log('Creating new case');
        await createCase(title, description, selectedTechnician);
      }

      setNotificationsEnabled(true);
    } catch (error) {
      console.log('Case is not being registered', error);
      Alert.alert('Case is not being registered');
    } finally {
      setIsLoading(false);
    }
  };


  return {handleBackPress, handleNavigation, confirmNavigation, cancelNavigation, attemptNavigation, showExitConfirmation, pendingNavigation,
    modalState, setModalState, enablePopup, setEnablePopup, handleTechnicianSelect, handleHomeNavigation, manageCollectionOfCaseInfo,
    selectedTechnician, notificationsEnabled, isLoading, title, description, caseId,
  };
};
