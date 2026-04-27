import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_menu_007', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nlm007-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm007-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm007-three/i)).toBeInTheDocument();
  });
});
