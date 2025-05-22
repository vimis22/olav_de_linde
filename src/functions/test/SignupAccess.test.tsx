import {signupWithUser} from '../manager_services/AuthenticationManager.tsx';
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

test('signupWithUser', async () => {
  it('should return 1', async () => {
     const result = await signupWithUser('name', 'email', 'password', 'confirmPassword', 'companyName', 'cvrNumber', 'address', 'houseNumber', 'phoneNumber');
     expect(result).toBe(1);
   });
  it('should return -1', async () => {
    const result = await signupWithUser('name', 'email', 'password', 'confirmPassword', 'companyName', 'cvrNumber', 'address', 'houseNumber', 'phoneNumber');
    expect(!result).toBe(-1);
  });
});
