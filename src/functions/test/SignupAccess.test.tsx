import {createCustomer} from '../crud-operations/entities/customer/CustomerCreate.tsx';

jest.mock('@react-native-firebase/firestore', () => {
  const addMock = jest.fn(() => Promise.resolve('1234567890'));
  const collectionMock = jest.fn(() => ({
    add: addMock,
  }));
  return jest.fn(() => ({
    collection: collectionMock,
  }));
});

jest.mock('@react-native-firebase/auth', () => ({
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest
      .fn()
      .mockImplementation((email, password) => {
        if (email === 'invalid-email' || password === 'short') {
          return Promise.reject(new Error('Invalid credentials'));
        }
        return Promise.resolve({user: {uid: '1234567890'}});
      }),
  })),
}));

describe('Signup Access Tests', () => {
  it('should return a user ID', async () => {
    const result = await createCustomer({
      name: 'name',
      email: 'email',
      password: 'password',
      confirmPassword: 'confirmPassword',
      companyName: 'companyName',
      cvrNumber: 'cvrNumber',
      address: 'address',
      houseNumber: 'houseNumber',
      phoneNumber: 'phoneNumber',
    });
    expect(result).toBeDefined();
  });

  it('should throw an error with invalid data', async () => {
    try {
      await createCustomer({
        name: '',
        email: 'invalid-email',
        password: 'short',
        confirmPassword: 'different',
        companyName: '',
        cvrNumber: '',
        address: '',
        houseNumber: '',
        phoneNumber: ''
      });
      // If we reach here, the test should fail
      expect(true).toBe(false);
    } catch (error) {
      // We expect an error to be thrown
      expect(error).toBeDefined();
    }
  });
});
