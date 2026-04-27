import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_spring_009', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/asp009-spin/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /asp009-bounce/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
