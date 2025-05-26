import React from 'react';
import { Image, StyleSheet, View, ScrollView, ActivityIndicator, Text, TextInput } from 'react-native';
import NormalText from '../../../components/textual/NormalText.tsx';
import CaseProgressIndicator from '../../../components/progress/CaseProgressIndicator.tsx';
import { calenderIcon, locationIcon, pentiaHouseBackground, screwDriverIcon, tickMarkIcon, userIcon } from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import TextBox from '../../../components/box/TextBox.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import useCaseDetails from '../../../hooks/useCaseDetails.tsx';
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
          onChatPress={() => navigation.navigate('ExperimentalChat')}
        />

        {caseData.documents && caseData.documents.length > 0 && (
          <DocumentsSection documents={caseData.documents} />
        )}

        <ActionButtonsRow
          isEditing={isEditing}
          onEdit={handleEdit}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </View>
    </ScrollView>
  );
};

//Here I have created a LoaderView which loads the CaseDetails upon starting.
const LoadingView = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#5C6855" />
  </View>
);

//Here I have created a ErrorView where i have created.
const ErrorView = ({ error, onGoBack }: { error: string, onGoBack: () => void }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{error}</Text>
    <ActionButton backgroundColor="#5C6855" onPress={onGoBack} title="Go Back"
      textColor="#ffffff" height={48} width={220} />
  </View>
);

//Here I have created a Case Header, where title and progress of case is displayed
const CaseHeader = ({ title, statusStep, status }: { title: string, statusStep: number, status: string }) => (
  <>
    <NormalText text={title} fontSize={22} fontWeight="bold" />
    <CaseProgressIndicator step={statusStep} icon1={locationIcon} icon2={userIcon} icon3={calenderIcon} icon4={screwDriverIcon} icon5={tickMarkIcon} />
    <NormalText text={status} fontSize={15} fontWeight="600" />
  </>
);

//Here I have displayed the deadline. Note that it is the present time and not a selected one.
const DeadlineDisplay = ({ deadline, formatDate }: { deadline: any, formatDate: (date: any) => string }) => (
  <InputFieldArea fieldIcon={calenderIcon} fieldIconBackground="#D8D8CE" fieldIconSize={28} textColor="#000000" placeholder={formatDate(deadline)} value={formatDate(deadline)}
    onChangeText={() => {}} containerHeight={48} containerRadius={18} whenPassword={false} editable={false} />
);
const DescriptionSection = ({isEditing, description, editedDescription, setEditedDescription}: {
  isEditing: boolean,
  description: string,
  editedDescription: string,
  setEditedDescription: (text: string) => void
}) => (
  isEditing ? (
    <View style={styles.editContainer}>
      <TextInput style={styles.editInput} value={editedDescription}
        onChangeText={setEditedDescription} multiline numberOfLines={4} placeholder="Enter case description" />
    </View>
  ) : (
    <TextBox title={description} backgroundColor="#ffffff" textColor="black" textSize={12}
      caseContainerHeight={140} caseContainerWidth="100%" caseContainerBorderRadius={10} textContainerHeight={100}
      textContainerWidth="90%" textContainerBorderRadius={5} textContainerBackgroundColor="transparent"
    />
  )
);

const AssignedEmployeeSection = ({resident, caretaker, landlord}: {resident?: string, caretaker?: string, landlord?: string}) => (
  <View style={styles.peopleContainer}>
    {resident && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Beboer: ${resident}`} fontSize={14} />
      </View>
    )}

    {caretaker && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Vicevært: ${caretaker}`} fontSize={14} />
      </View>
    )}

    {landlord && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Udlejer: ${landlord}`} fontSize={14} />
      </View>
    )}
  </View>
);

const ImageSection = ({imageUrl, onChatPress}: {imageUrl?: string, onChatPress: () => void}) => (
  <View style={styles.imageBackgroundContainer}>
    <Image
      source={imageUrl ? { uri: imageUrl } : pentiaHouseBackground}
      style={styles.backgroundImage}
      resizeMode="cover"
    />
    <View style={styles.overlay}>
      <ActionButton backgroundColor="#ff008b" onPress={onChatPress} title={'Chat'}
        textColor="#ffffff" height={48} width={220} />
    </View>
  </View>
);


const DocumentsSection = ({ documents }: { documents: any[] }) => (
  <View style={styles.documentsContainer}>
    <NormalText text="Dokumenter" fontSize={16} fontWeight="bold" />
    {documents.map((doc, index) => (
      <Text key={index} style={styles.documentLink}>
        {`Dokument ${index + 1}`}
      </Text>
    ))}
  </View>
);


const ActionButtonsRow = ({isEditing, onEdit, onSave, onDelete}: {isEditing: boolean, onEdit: () => void, onSave: () => void, onDelete: () => void}) => (
  <View style={styles.actionButtonsRow}>
    {isEditing ? (
      <ActionButton backgroundColor={'#5C6855'} onPress={onSave} title={'Gem'}
        textColor={'#ffffff'} height={44} width={120} />
    ) : (
      <ActionButton backgroundColor={'#BDC8B9'} onPress={onEdit} title={'Rediger'}
        textColor={'#ffffff'} height={44} width={120} />
    )}
    <ActionButton backgroundColor={'#CB4F00'} onPress={onDelete} title="Slet"
      textColor={'#ffffff'} height={44} width={120} />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
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
    elevation: 6, // For Android
    alignItems: 'center',
  },
  peopleContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  personIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  imageBackgroundContainer: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 18,
    marginBottom: 18,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    width: '100%',
  },
  documentsContainer: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  documentLink: {
    color: '#5C6855',
    textDecorationLine: 'underline',
    marginVertical: 5,
    fontSize: 14,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    marginBottom: 4,
  },
  editContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  editInput: {
    height: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: '#000000',
  },
});

export default CaseDetailsScreen;
