import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: reset_btn_008', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /rb008-plus/i }));
    expect(screen.getByText(/rb008-val: 1/i)).toBeInTheDocument();
  });
});
