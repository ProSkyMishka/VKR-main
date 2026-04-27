import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_013', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds013-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds013-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds013-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds013-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds013-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds013-itemC/i)).toBeInTheDocument();
  });
});
