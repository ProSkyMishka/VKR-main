import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: nav_empty', () => {
  it('shows nav content', () => {
  render(<App />);
  expect(screen.getByText(/Empty nav/i)).toBeInTheDocument();
});
});
