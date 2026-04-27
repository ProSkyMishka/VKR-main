import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: bounded_counter_001', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /bc001-up/i }));
    expect(screen.getByText(/bc001-n: 1/4/i)).toBeInTheDocument();
  });
});
