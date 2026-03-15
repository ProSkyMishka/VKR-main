import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: init_state', () => {
  it('renders and has interactive elements', () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
});
