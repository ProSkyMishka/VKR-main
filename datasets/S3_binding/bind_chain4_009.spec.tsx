import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_chain4_009', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /b4009-leaf/i }));
    expect(screen.getByText(/b4009-root: 1/i)).toBeInTheDocument();
  });
});
