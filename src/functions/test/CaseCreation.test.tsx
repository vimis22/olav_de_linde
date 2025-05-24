// @ link https://github.com/mrbenhowl/mocking-firebase-initializeApp-and-firebase-auth-using-jest/tree/master
// @ link https://reactnavigation.org/docs/testing/?utm_source=chatgpt.com

import {createCase} from '../crud-operations/entities/case/CaseCreate.tsx';
import firestore from '@react-native-firebase/firestore';

jest.mock('@react-native-firebase/firestore', () => {
  const addMock = jest.fn(() => Promise.resolve('1234567890'));
  const collectionMock = jest.fn(() => ({
    add: addMock,
  }));
  return jest.fn(() => ({
    collection: collectionMock,
  }));
});

it('should return 1', async () => {
  const result = await createCase('title', 'description', 'technician');
  expect(result).toBe(1);
});
it('should return -1', async () => {
  const result = await createCase('title', 'description', 'technician');
  expect(result).toBe(-1);
});
