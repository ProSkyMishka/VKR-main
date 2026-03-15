import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: child_toggle', () => {
  it('binding updates parent', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText(/Parent: Off/)).toBeInTheDocument();
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/Parent: On/)).toBeInTheDocument();
});
});
