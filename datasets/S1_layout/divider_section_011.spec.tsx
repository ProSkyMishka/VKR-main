import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_011', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds011-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds011-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds011-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds011-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds011-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds011-itemC/i)).toBeInTheDocument();
  });
});
