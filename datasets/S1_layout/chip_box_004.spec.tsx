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

describe('S1 layout: chip_box_004', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/chip004-label/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/chip004-label/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:purple|#?AF52DE|rgb\(\s*175\s*,\s*82|#?800080|rgb\(\s*128\s*,\s*0\s*,\s*128)/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)border-radius:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)width:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)height:\s*\d/i)).not.toBeNull();
    expect(findAncestorMatching(el, /(?:^|;|\s)color:\s*(?:white|#?[Ff]{3}(?:[Ff]{3})?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\))/i)).not.toBeNull();
  });
});
