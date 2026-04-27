import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_chain_006', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ach006-multi/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ach006-trigger/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
