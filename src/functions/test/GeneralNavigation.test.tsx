import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../../navigation/App.tsx';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

describe('General Navigation Tests', () => {
  test('Navigation towards the next screen, when a button is pressed', async () => {
    const {getByTestId, findByText} = render(<App />);
    const button = getByTestId('actionButton');
    fireEvent.press(button);
    const text = await findByText('Afventer Godkendelse');
    expect(text).toBeTruthy();
  });
});
