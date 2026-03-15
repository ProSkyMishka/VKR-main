import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: with_animation', () => {
  it('has toggle and content', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText(/Slide/i)).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /Move/i }));
  expect(document.body.textContent).toBeTruthy();
});
});
