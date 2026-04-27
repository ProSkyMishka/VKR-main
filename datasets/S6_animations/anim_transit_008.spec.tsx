import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_transit_008', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /at008-toggle/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
