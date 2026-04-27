import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_opacity_001', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ao001-fade/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ao001-toggle/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
