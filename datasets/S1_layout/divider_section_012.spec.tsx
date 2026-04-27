import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_012', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds012-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds012-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds012-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds012-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds012-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds012-itemC/i)).toBeInTheDocument();
  });
});
