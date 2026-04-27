import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: counter_inc_003', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ci003-inc/i }));
    expect(screen.getByText(/ci003-count: 7/i)).toBeInTheDocument();
  });
});
