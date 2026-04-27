import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('S1 layout: divider_section_006', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/ds006-secA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds006-secB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds006-secC/i)).toBeInTheDocument();
    expect(screen.getByText(/ds006-itemA/i)).toBeInTheDocument();
    expect(screen.getByText(/ds006-itemB/i)).toBeInTheDocument();
    expect(screen.getByText(/ds006-itemC/i)).toBeInTheDocument();
  });
});
