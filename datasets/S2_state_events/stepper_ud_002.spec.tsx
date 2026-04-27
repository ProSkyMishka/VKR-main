import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: stepper_ud_002', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /su002-up/i }));
    expect(screen.getByText(/su002-v: 1/i)).toBeInTheDocument();
  });
});
