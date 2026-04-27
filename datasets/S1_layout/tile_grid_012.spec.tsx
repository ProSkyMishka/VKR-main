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

describe('S1 layout: tile_grid_012', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/tg012-t1/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t2/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t3/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t4/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t5/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t6/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t7/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t8/i)).toBeInTheDocument();
    expect(screen.getByText(/tg012-t9/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/tg012-t1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:pink|#?FF2D55|rgb\(\s*255\s*,\s*45|#?FFC0CB|rgb\(\s*255\s*,\s*192)/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:white|#?[Ff]{3}(?:[Ff]{3})?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\))/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
  });
});
