import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S5 navigation: nav_list_menu_008', () => {
  it('shows nav content', () => {
    render(<App />);
    expect(screen.getByText(/nlm008-one/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm008-two/i)).toBeInTheDocument();
    expect(screen.getByText(/nlm008-three/i)).toBeInTheDocument();
  });
});
