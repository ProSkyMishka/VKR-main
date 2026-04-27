import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_chain4_012', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /b4012-leaf/i }));
    expect(screen.getByText(/b4012-root: 1/i)).toBeInTheDocument();
  });
});
