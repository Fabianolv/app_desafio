import React from 'react';
import Button from './Button.component';
import { render } from '@testing-library/react-native';

describe('Button tests', () => {
  describe('Component test', () => {
    it('Deve renderizar o Label caso loading seja falso', () => {
      const { getByText } = render(
        <Button label="Test Button" loading={false} />,
      );

      expect(getByText('Test Button')).toBeTruthy();
    });

    it('Deve renderizar o indicador de loading caso loading = true', () => {
      const { getByTestId } = render(
        <Button label="Test Button" loading={true} />,
      );

      expect(getByTestId('loading')).toBeTruthy();
    });
  });
});
