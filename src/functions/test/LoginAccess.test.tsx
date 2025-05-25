import {loginCustomer, logoutCustomer} from '../crud-operations/entities/customer/CustomerRead.tsx';

// Mock Firestore
jest.mock('@react-native-firebase/firestore', () => {
  const getDataMock = jest.fn(() => ({
    name: 'Test User',
    email: 'test@test.com',
  }));
  const getMock = jest.fn(() => ({
    data: getDataMock,
    exists: true,
  }));
  const docMock = jest.fn(() => ({
    get: getMock,
  }));
  const collectionMock = jest.fn(() => ({
    doc: docMock,
  }));
  return jest.fn(() => ({
    collection: collectionMock,
  }));
});

// Mock Firebase Auth
jest.mock('@react-native-firebase/auth', () => ({
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest
      .fn()
      .mockImplementation((email, password) => {
        if (email === 'wrong@test.com' || password === 'wrongpass') {
          return Promise.reject(new Error('Invalid credentials'));
        }
        return Promise.resolve({user: {uid: '123'}});
      }),
    signOut: jest.fn().mockResolvedValue(true),
  })),
}));

describe('Login Tests', () => {
  it('should successfully login with valid credentials', async () => {
    const result = await loginCustomer('test@test.com', 'password123');
    expect(result).toBeDefined();
    expect(result.uid).toBe('123');
  });

  it('should fail login with invalid credentials', async () => {
    try {
      await loginCustomer('wrong@test.com', 'wrongpass');
      // If we reach here, the test should fail
      expect(true).toBe(false);
    } catch (error) {
      // We expect an error to be thrown
      expect(error).toBeDefined();
      expect(error.message).toBe('Invalid credentials');
    }
  });

  it('should successfully logout a user', async () => {
    // Act
    await expect(logoutCustomer()).resolves.not.toThrow();
  });
});
