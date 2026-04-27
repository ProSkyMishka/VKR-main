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

describe('S1 layout: grid_cells_008', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/gc008-r1c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc008-r1c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc008-r1c3/i)).toBeInTheDocument();
    expect(screen.getByText(/gc008-r2c1/i)).toBeInTheDocument();
    expect(screen.getByText(/gc008-r2c2/i)).toBeInTheDocument();
    expect(screen.getByText(/gc008-r2c3/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/gc008-r1c1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
  });
});
