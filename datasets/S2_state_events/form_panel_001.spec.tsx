import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: form_panel_001', () => {
  it('updates state on action', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /fp001-submit/i }));
    expect(screen.getByText(/fp001-done q=1 f=0/i)).toBeInTheDocument();
  });
});
