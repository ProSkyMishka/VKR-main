import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_010', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds010-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds010-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds010-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds010-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds010-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds010-itemC/i)).toBeInTheDocument();
  });
});
