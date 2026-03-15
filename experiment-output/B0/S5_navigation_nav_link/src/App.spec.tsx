import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: nav_link', () => {
  it('navigates on link click', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('link', { name: /Go to Detail/i }));
  expect(screen.getByText(/Detail/)).toBeInTheDocument();
});
});
