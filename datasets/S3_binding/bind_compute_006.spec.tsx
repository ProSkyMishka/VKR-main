import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_compute_006', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /bcm006-a\+/i }));
    expect(screen.getByText(/bcm006-sum: 4/i)).toBeInTheDocument();
  });
});
