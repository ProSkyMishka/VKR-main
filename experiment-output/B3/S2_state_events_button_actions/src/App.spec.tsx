import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: button_actions', () => {
  it('updates state on action', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /Action A/i }));
  expect(screen.getByText(/A/)).toBeInTheDocument();
});
});
