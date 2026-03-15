import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: on_appear', () => {
  it('shows content', () => {
  render(<App />);
  expect(screen.getByText(/Loaded/i)).toBeInTheDocument();
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
});
