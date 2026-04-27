import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S2 state+events: toggle_label_state_005', () => {
  it('toggles and updates', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText(/tl005-on/i)).toBeInTheDocument();
  });
});
