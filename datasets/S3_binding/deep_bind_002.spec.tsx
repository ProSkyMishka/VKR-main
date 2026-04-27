import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: deep_bind_002', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /db002-deep/i }));
    expect(screen.getByText(/db002-root: 1/i)).toBeInTheDocument();
  });
});
