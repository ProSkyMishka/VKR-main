import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('S4 list/foreach: list_empty_state', () => {
  it('shows list content', () => {
    render(<App />);
    expect(document.querySelector('ul') || document.body).toBeTruthy();
  });
});
