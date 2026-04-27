import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_001', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds001-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds001-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds001-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds001-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds001-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds001-itemC/i)).toBeInTheDocument();
  });
});
