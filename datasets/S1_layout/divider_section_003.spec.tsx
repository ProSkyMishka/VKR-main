import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_003', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds003-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds003-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds003-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds003-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds003-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds003-itemC/i)).toBeInTheDocument();
  });
});
