import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_003', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp003-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp003-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp003-list/i)).toBeInTheDocument();
  });
});
