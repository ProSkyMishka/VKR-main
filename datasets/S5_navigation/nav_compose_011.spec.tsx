import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_011', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp011-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp011-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp011-list/i)).toBeInTheDocument();
  });
});
