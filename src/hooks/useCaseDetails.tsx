import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { CaseInfo } from '../functions/crud-operations/entities/case/CaseInfo.ts';
import { readCaseById } from '../functions/crud-operations/entities/case/CaseRead.tsx';
import { updateCaseByDescription } from '../functions/crud-operations/entities/case/CaseUpdate.tsx';
import { deleteCaseById } from '../functions/crud-operations/entities/case/CaseDelete.tsx';

//Here we have included the logic of displaying, editing and deleting cases.
export const useCaseDetails = (caseId: string | undefined, navigation: any) => {
  // State management
  const [caseData, setCaseData] = useState<CaseInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState<string>('');

  //Here we have tried to fetch the case data from the caseId
  const fetchCaseData = useCallback(async () => {
    if (!caseId) {
      setError('No case ID provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await readCaseById(caseId);

      if ('id' in result && typeof result.id === 'number' && result.id < 0) {
        setError('Could not fetch case details');
      } else {
        const caseResult = result as CaseInfo;
        setCaseData(caseResult);
        setEditedDescription(caseResult.description || '');
      }
    } catch (err) {
      console.error('Error fetching case:', err);
      setError('An error occurred while fetching case details');
    } finally {
      setLoading(false);
    }
  }, [caseId]);

  // Fetch case data when the component mounts or caseId changes
  useEffect(() => {
    fetchCaseData();
  }, [fetchCaseData]);

  //Her we are enabling to edit the case-description.
  const handleEdit = () => {
    setIsEditing(true);
  };

  //Here we are saving the edited description to the database.
  const handleSave = async () => {
    if (!caseData || !caseData.id) return;

    try {
      setLoading(true);
      const result = await updateCaseByDescription(caseData.id, editedDescription);

      if (result === 1 || result === undefined) {
        setCaseData({
          ...caseData,
          description: editedDescription,
        });
        setIsEditing(false);
        Alert.alert('Success', 'Case description updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update case description');
      }
    } catch (err) {
      console.error('Error updating case:', err);
      Alert.alert('Error', 'An error occurred while updating the case');
    } finally {
      setLoading(false);
    }
  };

  //This method process the deletion of case, by conducting a confirm-process to ensure that it is being deleted.
  const handleDelete = async () => {
    if (!caseData || !caseData.id) return;
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this case?', [{text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setLoading(true);
              const result = await deleteCaseById(caseData.id);

              if (result === 1) {
                Alert.alert('Success', 'Case deleted successfully', [
                  { text: 'OK', onPress: () => navigation.goBack() },
                ]);
              } else {
                Alert.alert('Error', 'Failed to delete case');
                setLoading(false);
              }
            } catch (err) {
              console.error('Error deleting case:', err);
              Alert.alert('Error', 'An error occurred while deleting the case');
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  //This updates the date automatically with the setting of deadline.
  const formatDate = (date: any): string => {
    if (typeof date?.toDateString === 'function') {
      return date.toDateString();
    } else if (date instanceof Date) {
      return date.toDateString();
    } else if (date?.seconds) {
      return new Date(date.seconds * 1000).toDateString();
    }
    return 'No date available';
  };

  return {caseData, loading, error, isEditing, editedDescription, setEditedDescription, handleEdit, handleSave, handleDelete, formatDate};
};

export default useCaseDetails;
