import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);

  // contains a header
  expect(screen.getByTestId('header-component'));
  // contains a menu with two elements

  // contains a routable body
});
