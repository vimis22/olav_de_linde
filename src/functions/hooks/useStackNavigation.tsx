import {useState} from 'react';

export const useStackNavigation = (navigation: any, setNotificationsEnabled?: (value: boolean) => void) => {
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<{screen: string, params?: any} | null>(null);

  const handleNavigation = (screenName: string, params?: any) => {
    navigation.navigate(screenName, params);
  };

  const confirmNavigation = () => {
    if (pendingNavigation) {
      setShowExitConfirmation(false);
      navigation.navigate(pendingNavigation.screen, pendingNavigation.params);
      setPendingNavigation(null);
    }
  };

  const cancelNavigation = () => {
    setShowExitConfirmation(false);
    setPendingNavigation(null);
  };

  const attemptNavigation = (screenName: string, params?: any) => {
    setPendingNavigation({screen: screenName, params});
    setShowExitConfirmation(true);
  };

  const handleHomeNavigation = () => {
    if (setNotificationsEnabled) {
      setNotificationsEnabled(false);
    }
    navigation.navigate('HomeTab');
  };

  return {handleNavigation, confirmNavigation, cancelNavigation, attemptNavigation, handleHomeNavigation, showExitConfirmation, pendingNavigation};
};
