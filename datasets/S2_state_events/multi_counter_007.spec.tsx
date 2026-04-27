import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: multi_counter_007', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /mc007-incB/i }));
    expect(screen.getByText(/mc007-b: 2/i)).toBeInTheDocument();
  });
});
