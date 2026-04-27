import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_int_006', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /bi006-childInc/i }));
    expect(screen.getByText(/bi006-total: 1/i)).toBeInTheDocument();
  });
});
