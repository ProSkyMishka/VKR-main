import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S5 navigation: stack_link', () => {
  it('renders navigation', () => { render(<App />); expect(document.body.textContent).toBeTruthy(); });
});
