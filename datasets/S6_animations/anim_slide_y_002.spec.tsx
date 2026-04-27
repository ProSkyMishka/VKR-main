import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_slide_y_002', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/asy002-drop/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /asy002-fall/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
