import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S2 state+events: two_toggle_state_012', () => {
  it('shows content', () => {
    render(<App />);
    expect(screen.getByText(/tts012-x/i)).toBeInTheDocument();
    expect(screen.getByText(/tts012-y/i)).toBeInTheDocument();
  });
});
