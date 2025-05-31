import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import useCaseDetails from '../../../functions/hooks/useCaseDetails.tsx';
import LoadingView from '../../../components/casedetails/LoadingView.tsx';
import ErrorView from '../../../components/casedetails/ErrorView.tsx';
import CaseHeader from '../../../components/casedetails/CaseHeader.tsx';
import DeadlineDisplay from '../../../components/casedetails/DeadlineDisplay.tsx';
import DescriptionSection from '../../../components/casedetails/DescriptionSection.tsx';
import AssignedEmployeeSection from '../../../components/casedetails/AssignedEmployeeSection.tsx';
import ImageSection from '../../../components/casedetails/ImageSection.tsx';
import DocumentsSection from '../../../components/casedetails/DocumentSection.tsx';
import ActionButtonsRow from '../../../components/casedetails/ActionButtonsRow.tsx';

/**
 * CaseDetailsScreen is a component that is used to display the details of a case.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @param route - Is a function that is used to get the route parameters.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box where information regarding the created case is displayed after loading.
 */
const CaseDetailsScreen = ({ navigation, route }: any) => {
  const {caseData, loading, error, isEditing, editedDescription, setEditedDescription, handleEdit, handleSave, handleDelete, formatDate} = useCaseDetails(route?.params?.caseId, navigation);

  //@link https://github.com/herodev-ch/ReactNativeDream/blob/learn/firebase/src/screens/HomeScreen.tsx
  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView error={error} onGoBack={() => navigation.goBack()} />;
  }

  if (!caseData) {
    return <ErrorView error="No case data found" onGoBack={() => navigation.goBack()} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.modal}>
        <CaseHeader
          title={caseData.title}
          statusStep={caseData.statusStep || 1}
          status={caseData.status || 'Under behandling'}
        />

        {caseData.deadline && (
          <DeadlineDisplay deadline={caseData.deadline} formatDate={formatDate} />
        )}

        <DescriptionSection
          isEditing={isEditing}
          description={caseData.description}
          editedDescription={editedDescription}
          setEditedDescription={setEditedDescription}
        />

        <AssignedEmployeeSection
          resident={caseData.resident}
          caretaker={caseData.caretaker}
          landlord={caseData.landlord}
        />

        <ImageSection
          imageUrl={caseData.imageUrl}
          onChatPress={() => navigation.navigate('ChatScreen')}
        />

        {caseData.documents && caseData.documents.length > 0 && (
          <DocumentsSection documents={caseData.documents} />
        )}

        <View>
          <ActionButtonsRow isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} onDelete={handleDelete} />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 16,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 22,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
});

export default CaseDetailsScreen;
