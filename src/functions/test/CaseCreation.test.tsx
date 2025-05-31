import { createCase } from '../crud-operations/entities/case/CaseCreate.tsx';
import { updateCaseByDescription } from '../crud-operations/entities/case/CaseUpdate.tsx';
import { Alert } from 'react-native';

/**
 * Here we have tried to test the manageCollectionOfCaseInfo method.
 * We have started by mocking react native and crud-operations from the case.
 * Thereafter we have created the manageCollectionOfCaseInfo as a mock method.
 * Afterwards we have created 3 scenarios based the following:
 * Scenario 1: All fields are provided
 * Scenario 2: CaseId is provided, where case is being updated.
 * Scenario 3: Missing fields
 * @link https://jestjs.io/docs/expect
 * @link https://github.com/mrbenhowl/mocking-firebase-initializeApp-and-firebase-auth-using-jest/tree/master
 * @link https://reactnavigation.org/docs/testing/?utm
 */

jest.mock('react-native', () => ({
  Alert: {alert: jest.fn()},
}));

jest.mock('../crud-operations/entities/case/CaseCreate.tsx', () => ({
  createCase: jest.fn().mockResolvedValue(true),
}));

jest.mock('../crud-operations/entities/case/CaseUpdate.tsx', () => ({
  updateCaseByDescription: jest.fn().mockResolvedValue(true),
}));


const manageCollectionOfCaseInfo = async (title: string, description: string, selectedTechnician: string, caseId: string | null = null) => {
  try {
    if (!title || !description || !selectedTechnician) {
      Alert.alert('Please fill in all the fields');
      return false;
    }

    if (caseId) {
      const updatedDescription = `${description} Assigned to: ${selectedTechnician}`;
      await updateCaseByDescription(caseId, updatedDescription);
    } else {
      await createCase(title, description, selectedTechnician);
    }

    return true;
  } catch (error) {
    Alert.alert('Case is not being registered');
    return false;
  }
};

describe('Case Creation Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new case when all fields are provided', async () => {
    const result = await manageCollectionOfCaseInfo('Test Title', 'Test Description', 'Technician Test');

    expect(result).toBe(true);
    expect(createCase).toHaveBeenCalledWith('Test Title', 'Test Description', 'Technician Test');
    expect(Alert.alert).not.toHaveBeenCalled();
  });

  it('should update an existing case when caseId is provided', async () => {
    const result = await manageCollectionOfCaseInfo('Test Title', 'Test Description', 'Technician Test', '123');

    expect(result).toBe(true);
    expect(updateCaseByDescription).toHaveBeenCalledWith('123', 'Test Description Assigned to: Technician Test');
    expect(Alert.alert).not.toHaveBeenCalled();
  });

  it('should show alert and return false when fields are missing', async () => {
    const result = await manageCollectionOfCaseInfo('', 'Test Description', 'Technician Test');

    expect(result).toBe(false);
    expect(Alert.alert).toHaveBeenCalledWith('Please fill in all the fields');
    expect(createCase).not.toHaveBeenCalled();
    expect(updateCaseByDescription).not.toHaveBeenCalled();
  });
});
