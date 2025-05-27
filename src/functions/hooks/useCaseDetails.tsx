import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { CaseInfo } from '../crud-operations/entities/case/CaseInfo.ts';
import { readCaseById } from '../crud-operations/entities/case/CaseRead.tsx';
import { updateCaseByDescription } from '../crud-operations/entities/case/CaseUpdate.tsx';
import { deleteCaseById } from '../crud-operations/entities/case/CaseDelete.tsx';

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
    //Here we are trying to fetch our caseId, when it is not present. We should recieve a false an empty value.
    if (!caseId) {
      setError('No case ID provided');
      setLoading(false);
      return;
    }
    //Here is the opposite going on. When the caseId is being fetched, then it is read as an instance of object via the result attribute.
    //Usually when we use instances of objects then we are able to access the attributes of the object.
    //And in this context, we see in the else-statement that the CaseData is being fetched as in instance, this means that we are trying to fetch info from CaseInfo.
    //The information from CaseInfo is displayed by setCaseData useState and when made changes to description, we simply apply the setEditedDescription.
    try {
      setLoading(true);
      setError(null);
      const result = await readCaseById(caseId);

      if (typeof result === 'string') {
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
    //Here we are trying to fetch the caseId, when it is not present. We should recieve a false an empty value.
    if (!caseData || !caseData.id) return;

    //Here we are trying to save the description by applying the recent change from editedCaseDescription on a specific case.
    //We expect the EnumMessage to be 1 or Success if the edited description is saved after editing successfully.
    try {
      setLoading(true);
      const result = await updateCaseByDescription(caseData.id, editedDescription);

      if (result === 'SUCCESS' || result === undefined) {
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

              if (result === 'SUCCESS') {
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
  //What initially is happening here is that we have taken an undefined object of date.
  //This object returns Date which matches with Local time that the case has been created with.
  //It is important to note, that this method is called in the CaseDetailsScreen.tsx file to create a deadline for case-issue.
  const formatDate = (date: any): string => {
    let dateObject = date;
    if (!date) {
      return new Date().toLocaleString();
    }
    if (date.seconds) {
      dateObject = new Date(date.seconds * 1000);
    }
    if (dateObject instanceof Date && !(dateObject.getTime())) {
      return dateObject.toLocaleString();
    }

    return new Date().toLocaleString();
  };

  return {caseData, loading, error, isEditing, editedDescription, setEditedDescription, handleEdit, handleSave, handleDelete, formatDate};
};

export default useCaseDetails;
