import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

function findAncestorMatching(start: HTMLElement, re: RegExp): HTMLElement | null {
  let cur: HTMLElement | null = start;
  while (cur) {
    const s = cur.getAttribute('style') || '';
    if (re.test(s)) return cur;
    cur = cur.parentElement;
  }
  return null;
}

describe('S1 layout: grid_cells_007', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/gc007-r1c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r1c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r2c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r2c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r3c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r3c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r4c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r4c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r5c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc007-r5c2/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/gc007-r1c1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
  });
});
