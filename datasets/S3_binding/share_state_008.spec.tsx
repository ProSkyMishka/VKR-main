import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: share_state_008', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /ss008-B/i }));
    expect(screen.getByText(/ss008-sum: 1/i)).toBeInTheDocument();
  });
});
