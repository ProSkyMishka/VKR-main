import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: multiple_state', () => {
  it('updates state on action', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /Update/i }));
  expect(screen.getByText(/a: 1/)).toBeInTheDocument();
});
});
