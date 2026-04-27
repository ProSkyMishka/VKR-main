import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: share_state_003', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ss003-B/i }));
    expect(screen.getByText(/ss003-sum: 1/i)).toBeInTheDocument();
  });
});
