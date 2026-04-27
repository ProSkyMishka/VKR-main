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

describe('S1 layout: tile_grid_011', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/tg011-t1/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t2/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t3/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t4/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t5/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t6/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t7/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t8/i)).toBeInTheDocument();
    expect(screen.getByText(/tg011-t9/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/tg011-t1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:orange|#?FF9500|rgb\(\s*255\s*,\s*149|#?FFA500|rgb\(\s*255\s*,\s*165)/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:white|#?[Ff]{3}(?:[Ff]{3})?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\))/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
  });
});
