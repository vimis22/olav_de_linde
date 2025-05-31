import * as CustomerRead from '../crud-operations/entities/customer/CustomerRead.tsx';
import { handleLogin } from '../hooks/AuthenticationManager.tsx';
import { Alert } from 'react-native';

/**
 * Here are successful and failed login mocks.
 * @link https://jestjs.io/docs/expect
 * @link https://github.com/mrbenhowl/mocking-firebase-initializeApp-and-firebase-auth-using-jest/tree/master
 * @link https://reactnavigation.org/docs/testing/?utm
 */
const mockSuccessfulLogin = jest.fn(() => Promise.resolve({uid: '123456'}));
const mockFailedLogin = jest.fn(() => Promise.reject(new Error('Invalid credentials')));

jest.mock('../crud-operations/entities/customer/CustomerRead.tsx', () => ({
  loginCustomer: jest.fn(),
}));

jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

describe('Login Access Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully login a user', async () => {
    (CustomerRead.loginCustomer as jest.Mock).mockImplementation(mockSuccessfulLogin);
    const mockNavigation = {
      reset: jest.fn(),
    };
    await handleLogin('test@example.com', 'password123', mockNavigation);
    expect(CustomerRead.loginCustomer).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(Alert.alert).toHaveBeenCalledWith('Login Success');
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  });

  it('should handle login failure', async () => {
    (CustomerRead.loginCustomer as jest.Mock).mockImplementation(mockFailedLogin);
    const mockNavigation = {
      reset: jest.fn(),
    };
    await handleLogin('invalid@example.com', 'wrongpassword', mockNavigation);
    expect(CustomerRead.loginCustomer).toHaveBeenCalledWith('invalid@example.com', 'wrongpassword');
    expect(Alert.alert).toHaveBeenCalledWith('The Login has failed', 'Invalid credentials');
    expect(mockNavigation.reset).not.toHaveBeenCalled();
  });
});
