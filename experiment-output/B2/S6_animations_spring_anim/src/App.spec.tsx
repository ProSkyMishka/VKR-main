import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: spring_anim', () => {
  it('has toggle and content', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  await user.click(screen.getByRole('button', { name: /Bounce/i }));
  expect(document.body.textContent).toBeTruthy();
});
});
