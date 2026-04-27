import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: bounded_counter_005', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /bc005-up/i }));
    expect(screen.getByText(/bc005-n: 1/8/i)).toBeInTheDocument();
  });
});
