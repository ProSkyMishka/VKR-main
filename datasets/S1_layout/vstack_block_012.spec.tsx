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

describe('S1 layout: vstack_block_012', () => {
  it('shows expected text', () => {
    render(<App />);
    expect(screen.getByText(/vb012-line1/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line2/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line3/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line4/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line5/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line6/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line7/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line8/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line9/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line10/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line11/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line12/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line13/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line14/i)).toBeInTheDocument();
    expect(screen.getByText(/vb012-line15/i)).toBeInTheDocument();
  });

  it('has expected styling', () => {
    render(<App />);
    const el = screen.getByText(/vb012-line1/i) as HTMLElement;
    expect(findAncestorMatching(el, /(?:^|;|\s)background-color:\s*(?:#[EeFf][0-9a-fA-F][EeFf][0-9a-fA-F][EeFf][0-9a-fA-F]\b|rgb\(\s*2[3-5][0-9]\s*,\s*2[3-5][0-9]\s*,\s*2[3-5][0-9])/i)).not.toBeNull();
  });
});
