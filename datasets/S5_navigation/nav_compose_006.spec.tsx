import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_compose_006', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/ncp006-pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp006-quick/i)).toBeInTheDocument();
    expect(screen.getByText(/ncp006-list/i)).toBeInTheDocument();
  });
});
