import {loginWithEmail} from '../manager_services/AuthenticationManager.tsx';
import {auth} from '@react-native-firebase/auth';

jest.mock('@react-native-firebase/auth', () => ({
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest
      .fn()
      .mockImplementation((email, password) => {
        if (email === true && password === true) {return Promise.resolve({user: {uid: '123'}});}
        return Promise.reject(new Error('Invalid credentials'));
      }),
  })),
}));

describe('Login Tests', () => {
  it('should successfully login with valid credentials', async () => {
    const result = await loginWithEmail('test@test.com', 'password123');
    expect(result).toBe(1);
  });

  it('should fail login with invalid credentials', async () => {
    const result = await loginWithEmail('wrong@test.com', 'wrongpass');
    expect(result).toBe(-1);
  });
});
