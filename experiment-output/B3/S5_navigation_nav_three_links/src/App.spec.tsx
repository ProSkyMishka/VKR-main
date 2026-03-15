import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: nav_three_links', () => {
  it('shows nav content', () => {
  render(<App />);
  expect(screen.getByText(/One/i)).toBeInTheDocument();
  expect(screen.getByText(/Two/i)).toBeInTheDocument();
  expect(screen.getByText(/Three/i)).toBeInTheDocument();
});
});
