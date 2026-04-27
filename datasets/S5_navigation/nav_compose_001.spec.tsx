import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_001', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp001-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp001-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp001-list/i)).toBeInTheDocument();
  });
});
