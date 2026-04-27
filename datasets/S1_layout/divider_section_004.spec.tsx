import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_004', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds004-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds004-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds004-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds004-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds004-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds004-itemC/i)).toBeInTheDocument();
  });
});
