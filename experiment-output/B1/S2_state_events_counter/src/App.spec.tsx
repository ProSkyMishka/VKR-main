import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: counter', () => {
  it('updates state on action', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /Increment/i }));
  expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
});
});
