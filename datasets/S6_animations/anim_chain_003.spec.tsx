import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_chain_003', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ach003-multi/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ach003-trigger/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
