import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: deep_bind_005', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /db005-deep/i }));
    expect(screen.getByText(/db005-root: 1/i)).toBeInTheDocument();
  });
});
