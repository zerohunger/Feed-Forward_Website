import React from 'react';
import { render, screen } from '@testing-library/react';
import AppV from './App';

test('renders learn react link', () => {
  render(<AppV/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
