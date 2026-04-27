import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_text_state_009', () => {
  it('binding propagates child→parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText(/bts009-yes/i)).toBeInTheDocument();
  });
});
