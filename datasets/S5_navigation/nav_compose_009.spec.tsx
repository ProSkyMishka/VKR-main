import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_009', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp009-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp009-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp009-list/i)).toBeInTheDocument();
  });
});
