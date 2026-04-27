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

describe('S1 layout: tile_grid_007', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/tg007-t1/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t2/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t3/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t4/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t5/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t6/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t7/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t8/i)).toBeInTheDocument();
    expect(screen.getByText(/tg007-t9/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/tg007-t1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:gr[ae]y|#?8E8E93|rgba?\(\s*142\s*,\s*142|#?808080|rgba?\(\s*128\s*,\s*128|rgba?\(\s*1[2-5][0-9]\s*,\s*1[2-5][0-9])/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:white|#?[Ff]{3}(?:[Ff]{3})?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\))/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
  });
});
