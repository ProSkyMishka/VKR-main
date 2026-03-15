import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: nav_multiple', () => {
  it('shows nav content', () => {
  render(<App />);
  expect(screen.getByText(/Page A/i)).toBeInTheDocument();
  expect(screen.getByText(/Page B/i)).toBeInTheDocument();
});
});
