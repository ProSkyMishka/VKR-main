import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: share_state_001', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ss001-B/i }));
    expect(screen.getByText(/ss001-sum: 1/i)).toBeInTheDocument();
  });
});
