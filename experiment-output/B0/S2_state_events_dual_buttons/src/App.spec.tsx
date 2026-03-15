import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: dual_buttons', () => {
  it('updates state on action', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /\+/ }));
  expect(screen.getByText(/1/)).toBeInTheDocument();
});
});
