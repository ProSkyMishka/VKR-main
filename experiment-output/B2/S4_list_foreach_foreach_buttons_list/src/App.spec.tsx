import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: foreach_buttons_list', () => {
  it('shows list content', () => {
    render(<App />);
    expect(screen.getByText(/First/i)).toBeInTheDocument();
    expect(screen.getByText(/Second/i)).toBeInTheDocument();
  });
});
