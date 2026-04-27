import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_slide_x_008', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/asx008-slide/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /asx008-move/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
