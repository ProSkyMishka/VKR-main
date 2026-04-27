import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: toggle_label_state_007', () => {
  it('toggles and updates', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText(/tl007-on/i)).toBeInTheDocument();
  });
});
