import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_scale_002', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/as002-scale/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /as002-zoom/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
