import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_bool_004', () => {
  it('binding propagates child→parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText(/bb004-on/i)).toBeInTheDocument();
  });
});
