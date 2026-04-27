import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: two_toggle_state_014', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/tts014-x/i)).toBeInTheDocument();
    expect(screen.getByText(/tts014-y/i)).toBeInTheDocument();
  });
});
