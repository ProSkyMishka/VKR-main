import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: reset_button', () => {
  it('shows content', () => {
  render(<App />);
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});
});
