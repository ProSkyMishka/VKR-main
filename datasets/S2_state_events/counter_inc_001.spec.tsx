import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: counter_inc_001', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ci001-inc/i }));
    expect(screen.getByText(/ci001-count: 3/i)).toBeInTheDocument();
  });
});
