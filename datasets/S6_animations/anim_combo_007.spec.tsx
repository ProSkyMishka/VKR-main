import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_combo_007', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ac007-combo/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ac007-switch/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
