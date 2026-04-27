import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: deep_bind_001', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /db001-deep/i }));
    expect(screen.getByText(/db001-root: 1/i)).toBeInTheDocument();
  });
});
