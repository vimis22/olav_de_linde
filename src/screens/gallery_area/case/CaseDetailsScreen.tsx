import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, ScrollView, ActivityIndicator, Text, Alert, TextInput } from 'react-native';
import NormalText from '../../../components/textual/NormalText.tsx';
import CaseProgressIndicator from '../../../components/progress/CaseProgressIndicator.tsx';
import { calenderIcon, locationIcon, pentiaHouseBackground, screwDriverIcon, tickMarkIcon, userIcon } from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import TextBox from '../../../components/box/TextBox.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import { readCaseById } from '../../../functions/crud-operations/entities/case/CaseRead.tsx';
import { CaseInfo } from '../../../functions/crud-operations/entities/case/CaseInfo.ts';
import { updateCaseByDescription } from '../../../functions/crud-operations/entities/case/CaseUpdate.tsx';
import { deleteCaseById } from '../../../functions/crud-operations/entities/case/CaseDelete.tsx';

const CaseDetailsScreen = ({ navigation, route }: any) => {
  const [caseData, setCaseData] = useState<CaseInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState<string>('');

  useEffect(() => {
    const fetchCaseData = async () => {
      // Check if we have a caseId in the route params
      const caseId = route?.params?.caseId;
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
          // Error fetching case
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
    };

    fetchCaseData();
  }, [route?.params?.caseId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!caseData || !caseData.id) return;

    try {
      setLoading(true);
      const result = await updateCaseByDescription(caseData.id, editedDescription);

      if (result === 1 || result === undefined) {
        // Update was successful
        setCaseData({
          ...caseData,
          description: editedDescription
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

  const handleDelete = async () => {
    if (!caseData || !caseData.id) return;

    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this case?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setLoading(true);
              const result = await deleteCaseById(caseData.id);

              if (result === 1) {
                Alert.alert('Success', 'Case deleted successfully', [
                  { text: 'OK', onPress: () => navigation.goBack() }
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
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5C6855" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <ActionButton
          backgroundColor="#5C6855"
          onPress={() => navigation.goBack()}
          title="Go Back"
          textColor="#ffffff"
          height={48}
          width={220}
        />
      </View>
    );
  }

  if (!caseData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No case data found</Text>
        <ActionButton
          backgroundColor="#5C6855"
          onPress={() => navigation.goBack()}
          title="Go Back"
          textColor="#ffffff"
          height={48}
          width={220}
        />
      </View>
    );
  }

  // Determine the status step (default to 1 if not specified)
  const statusStep = caseData.statusStep || 1;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.modal}>
        <NormalText text={caseData.title} fontSize={22} fontWeight="bold" />

        <CaseProgressIndicator
          step={statusStep}
          icon1={locationIcon}
          icon2={userIcon}
          icon3={calenderIcon}
          icon4={screwDriverIcon}
          icon5={tickMarkIcon}
        />

        <NormalText
          text={caseData.status || "Under behandling"}
          fontSize={15}
          fontWeight="600"
        />

        {caseData.deadline && (
          <InputFieldArea
            fieldIcon={calenderIcon}
            fieldIconBackground="#D8D8CE"
            fieldIconSize={28}
            textColor="#000000"
            placeholder={typeof caseData.deadline.toDateString === 'function'
              ? caseData.deadline.toDateString()
              : caseData.deadline instanceof Date
                ? caseData.deadline.toDateString()
                : new Date(caseData.deadline.seconds * 1000).toDateString()}
            value={typeof caseData.deadline.toDateString === 'function'
              ? caseData.deadline.toDateString()
              : caseData.deadline instanceof Date
                ? caseData.deadline.toDateString()
                : new Date(caseData.deadline.seconds * 1000).toDateString()}
            onChangeText={() => {}}
            containerHeight={48}
            containerRadius={18}
            whenPassword={false}
            editable={false}
          />
        )}

        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editedDescription}
              onChangeText={setEditedDescription}
              multiline
              numberOfLines={4}
              placeholder="Enter case description"
            />
          </View>
        ) : (
          <TextBox
            title={caseData.description}
            backgroundColor="#ffffff"
            textColor="black"
            textSize={12}
            caseContainerHeight={140}
            caseContainerWidth="100%"
            caseContainerBorderRadius={10}
            textContainerHeight={100}
            textContainerWidth="90%"
            textContainerBorderRadius={5}
            textContainerBackgroundColor="transparent"
          />
        )}

        {/* People associated with the case */}
        <View style={styles.peopleContainer}>
          {caseData.resident && (
            <View style={styles.personRow}>
              <Image source={userIcon} style={styles.personIcon} />
              <NormalText text={`Beboer: ${caseData.resident}`} fontSize={14} />
            </View>
          )}

          {caseData.caretaker && (
            <View style={styles.personRow}>
              <Image source={userIcon} style={styles.personIcon} />
              <NormalText text={`Vicevært: ${caseData.caretaker}`} fontSize={14} />
            </View>
          )}

          {caseData.landlord && (
            <View style={styles.personRow}>
              <Image source={userIcon} style={styles.personIcon} />
              <NormalText text={`Udlejer: ${caseData.landlord}`} fontSize={14} />
            </View>
          )}
        </View>

        {/* Image section */}
        <View style={styles.imageBackgroundContainer}>
          <Image
            source={caseData.imageUrl ? { uri: caseData.imageUrl } : pentiaHouseBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <ActionButton
              backgroundColor="#ff008b"
              onPress={() => navigation.navigate('ExperimentalChat')}
              title={'Chat'}
              textColor="#ffffff"
              height={48}
              width={220}
            />
          </View>
        </View>

        {/* Documents section */}
        {caseData.documents && caseData.documents.length > 0 && (
          <View style={styles.documentsContainer}>
            <NormalText text="Dokumenter" fontSize={16} fontWeight="bold" />
            {caseData.documents.map((doc, index) => (
              <Text key={index} style={styles.documentLink}>
                {`Dokument ${index + 1}`}
              </Text>
            ))}
          </View>
        )}

        <View style={styles.actionButtonsRow}>
          {isEditing ? (
            <ActionButton
              backgroundColor={'#5C6855'}
              onPress={handleSave}
              title={'Gem'}
              textColor={'#ffffff'}
              height={44}
              width={120}
            />
          ) : (
            <ActionButton
              backgroundColor={'#BDC8B9'}
              onPress={handleEdit}
              title={'Rediger'}
              textColor={'#ffffff'}
              height={44}
              width={120}
            />
          )}
          <ActionButton
            backgroundColor={'#CB4F00'}
            onPress={handleDelete}
            title="Slet"
            textColor={"#ffffff"}
            height={44}
            width={120}
          />
        </View>
      </View>
    </ScrollView>
  );
};

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
