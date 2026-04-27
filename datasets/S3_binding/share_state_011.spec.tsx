import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: share_state_011', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ss011-B/i }));
    expect(screen.getByText(/ss011-sum: 1/i)).toBeInTheDocument();
  });
});
