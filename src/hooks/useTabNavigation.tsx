import { useState } from 'react';

export const useTabNavigation = () => {
  const [currentTab, setCurrentTab] = useState('HomeTab');
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [pendingTab, setPendingTab] = useState<string | null>(null);

  const handleTabPress = (tabName: string) => {
    if (currentTab === 'CaseTab' && tabName !== 'CaseTab') {
      setPendingTab(tabName);
      setShowExitConfirmation(true);
      return true;
    }

    setCurrentTab(tabName);
    return false;
  };

  const confirmNavigation = () => {
    if (pendingTab) {
      setCurrentTab(pendingTab);
      setShowExitConfirmation(false);
      setPendingTab(null);
    }
  };
  const cancelNavigation = () => {
    setShowExitConfirmation(false);
    setPendingTab(null);
  };

  return {currentTab, showExitConfirmation, pendingTab, handleTabPress, confirmNavigation, cancelNavigation};
};

export default useTabNavigation;
