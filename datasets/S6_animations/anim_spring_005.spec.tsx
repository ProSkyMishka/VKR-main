import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_spring_005', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/asp005-spin/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /asp005-bounce/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
