import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_005', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp005-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp005-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp005-list/i)).toBeInTheDocument();
  });
});
