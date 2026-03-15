import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: parent_child_text', () => {
  it('renders with binding', () => {
  render(<App />);
  expect(document.body.textContent).toBeTruthy();
});
});
