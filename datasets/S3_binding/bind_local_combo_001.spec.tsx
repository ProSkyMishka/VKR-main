import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_local_combo_001', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /blc001-incShared/i }));
    expect(screen.getByText(/blc001-shared: 1/i)).toBeInTheDocument();
  });
});
