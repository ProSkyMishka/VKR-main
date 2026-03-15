import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: nested_binding', () => {
  it('child action updates parent', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /Inner/i }));
  expect(screen.getByText(/\\d+/)).toBeInTheDocument();
});
});
