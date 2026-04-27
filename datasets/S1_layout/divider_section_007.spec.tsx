import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_007', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds007-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds007-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds007-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds007-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds007-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds007-itemC/i)).toBeInTheDocument();
  });
});
