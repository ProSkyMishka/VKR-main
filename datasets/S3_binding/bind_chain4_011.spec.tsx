import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_chain4_011', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /b4011-leaf/i }));
    expect(screen.getByText(/b4011-root: 1/i)).toBeInTheDocument();
  });
});
