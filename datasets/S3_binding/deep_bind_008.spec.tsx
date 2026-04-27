import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: deep_bind_008', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /db008-deep/i }));
    expect(screen.getByText(/db008-root: 1/i)).toBeInTheDocument();
  });
});
