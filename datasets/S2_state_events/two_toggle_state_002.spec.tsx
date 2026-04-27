import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: two_toggle_state_002', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/tts002-x/i)).toBeInTheDocument();
    expect(screen.getByText(/tts002-y/i)).toBeInTheDocument();
  });
});
