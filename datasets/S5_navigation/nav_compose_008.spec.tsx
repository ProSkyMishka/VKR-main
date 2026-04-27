import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_008', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp008-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp008-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp008-list/i)).toBeInTheDocument();
  });
});
