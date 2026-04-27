import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_004', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp004-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp004-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp004-list/i)).toBeInTheDocument();
  });
});
