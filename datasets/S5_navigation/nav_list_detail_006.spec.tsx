import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_detail_006', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nld006-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nld006-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nld006-three/i)).toBeInTheDocument();
  });
});
