import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: two_toggles', () => {
  it('shows content', () => {
  render(<App />);
  expect(screen.getByText(/A/i)).toBeInTheDocument();
  expect(screen.getByText(/B/i)).toBeInTheDocument();
});
});
