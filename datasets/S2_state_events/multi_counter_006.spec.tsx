import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: multi_counter_006', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /mc006-incB/i }));
    expect(screen.getByText(/mc006-b: 2/i)).toBeInTheDocument();
  });
});
