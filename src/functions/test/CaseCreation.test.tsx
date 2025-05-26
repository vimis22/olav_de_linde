// @ link https://github.com/mrbenhowl/mocking-firebase-initializeApp-and-firebase-auth-using-jest/tree/master
// @ link https://reactnavigation.org/docs/testing/?utm

import {createCase} from '../crud-operations/entities/case/CaseCreate.tsx';
import firestore from '@react-native-firebase/firestore';

// Mock for successful case creation
const mockSuccessfulAdd = jest.fn(() => Promise.resolve({id: '1234567890'}));
// Mock for failed case creation
const mockFailedAdd = jest.fn(() => Promise.reject(new Error('Failed to add document')));

// Default mock setup
const mockCollection = jest.fn(() => ({
  add: mockSuccessfulAdd,
}));

jest.mock('@react-native-firebase/firestore', () => {
  return jest.fn(() => ({
    collection: mockCollection,
    FieldValue: {
      serverTimestamp: jest.fn(),
    },
  }));
});

describe('Case Creation Tests', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
    mockCollection.mockImplementation(() => ({
      add: mockSuccessfulAdd,
    }));
  });

  it('should successfully create a case and return the document ID', async () => {
    // Arrange
    const title = 'Test Case';
    const description = 'Test Description';
    const technician = 'Test Technician';

    // Act
    const result = await createCase(title, description, technician);

    // Assert
    expect(firestore).toHaveBeenCalled();
    expect(mockCollection).toHaveBeenCalledWith('Case');
    expect(mockSuccessfulAdd).toHaveBeenCalledWith({
      title,
      description,
      technicians: technician,
      createdAt: expect.anything(),
    });
    expect(result).toBe('1234567890');
    console.log('Case created successfully with ID:', result);
  });

  it('should return -1 when case creation fails', async () => {
    // Arrange
    mockCollection.mockImplementation(() => ({
      add: mockFailedAdd,
    }));
    const title = 'Test Case';
    const description = 'Test Description';
    const technician = 'Test Technician';

    // Act
    const result = await createCase(title, description, technician);

    // Assert
    expect(firestore).toHaveBeenCalled();
    expect(mockCollection).toHaveBeenCalledWith('Case');
    expect(mockFailedAdd).toHaveBeenCalled();
    expect(result).toBe(-1);
    console.log('Case creation failed as expected, returned:', result);
  });

  it('should validate input parameters before creating a case', async () => {
    // Arrange
    const title = '';
    const description = '';
    const technician = '';

    // Act
    const result = await createCase(title, description, technician);

    // Assert
    expect(mockCollection).toHaveBeenCalledWith('Case');
    expect(mockSuccessfulAdd).toHaveBeenCalledWith({
      title,
      description,
      technicians: technician,
      createdAt: expect.anything(),
    });
    // Even with empty strings, the function should still work as expected
    expect(result).toBe('1234567890');
  });
});
