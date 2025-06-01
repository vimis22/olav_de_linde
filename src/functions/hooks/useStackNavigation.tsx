import {useState} from 'react';

export const useStackNavigation = (navigation: any, setNotificationsEnabled?: (value: boolean) => void) => {
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<{screen: string, params?: any} | null>(null);

  /**
   * This method is used to handle the navigation between screens.
   * @param screenName - The name of the screen to be navigated to.
   * @param params - The parameters to be passed to the screen.
   */
  const handleNavigation = (screenName: string, params?: any) => {
    navigation.navigate(screenName, params);
  };

  /**
   * This method is used to confirm the navigation between screens.
   * @returns - Returns a boolean value based on the pending navigation.
   */
  const confirmNavigation = () => {
    if (pendingNavigation) {
      setShowExitConfirmation(false);
      navigation.navigate(pendingNavigation.screen, pendingNavigation.params);
      setPendingNavigation(null);
    }
  };

  /**
   * This method is used to cancel the navigation between screens.
   * @returns - Returns a null value based on the pending of navigation.
   */
  const cancelNavigation = () => {
    setShowExitConfirmation(false);
    setPendingNavigation(null);
  };

  /**
   * This method is used to attempt the navigation between screens.
   * @param screenName - The name of the screen to be navigated to.
   * @param params - The parameters to be passed to the screen.
   * @returns - Returns a boolean value based on the pending navigation.
   */
  const attemptNavigation = (screenName: string, params?: any) => {
    setPendingNavigation({screen: screenName, params});
    setShowExitConfirmation(true);
  };

  /**
   * This method is used to handle the navigation to the home screen.
   * @returns - Returns a boolean value based on the pending navigation.
   */
  const handleHomeNavigation = () => {
    if (setNotificationsEnabled) {
      setNotificationsEnabled(false);
    }
    navigation.navigate('HomeTab');
  };

  return {handleNavigation, confirmNavigation, cancelNavigation, attemptNavigation, handleHomeNavigation, showExitConfirmation, pendingNavigation};
};
