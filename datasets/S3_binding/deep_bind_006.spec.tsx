import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: deep_bind_006', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /db006-deep/i }));
    expect(screen.getByText(/db006-root: 1/i)).toBeInTheDocument();
  });
});
