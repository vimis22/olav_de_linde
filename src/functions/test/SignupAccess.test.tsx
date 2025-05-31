import { Alert } from 'react-native';

/**
 * Here we have tried to test the manageCollectionOfSignup method.
 * We have created 2 scenarios, which is the following:
 * Scenario 1: The passwords match with eachother, which returns true.
 * Scenario 2: The passwords do not match with eachother, which returns false and shows alert.
 * @link https://jestjs.io/docs/expect
 */
jest.mock('react-native', () => ({
  Alert: {alert: jest.fn()},
}));

const manageCollectionOfSignup = (password: string, confirmPassword: string): boolean => {
  if (password !== confirmPassword) {
    Alert.alert('The Password does not match the Confirmed Password');
    return false;
  }
  return true;
};

describe('Signup Access Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return true when passwords match', () => {
    const result = manageCollectionOfSignup('password123', 'password123');
    expect(result).toBe(true);
    expect(Alert.alert).not.toHaveBeenCalled();
  });

  it('should return false and show alert when passwords do not match', () => {
    const result = manageCollectionOfSignup('password123', 'password456');
    expect(result).toBe(false);
    expect(Alert.alert).toHaveBeenCalledWith('The Password does not match the Confirmed Password');
  });
});
