import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_chain_004', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ach004-multi/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ach004-trigger/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
