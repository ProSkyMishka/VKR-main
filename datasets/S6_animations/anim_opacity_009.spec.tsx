import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S6 animations: anim_opacity_009', () => {
  it('has toggle and content', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText(/ao009-fade/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ao009-toggle/i }));
    expect(document.body.textContent).toBeTruthy();
  });
});
