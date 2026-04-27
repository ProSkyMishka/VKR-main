import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_detail_011', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nld011-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nld011-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nld011-three/i)).toBeInTheDocument();
  });
});
