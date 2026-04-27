import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('S3 binding: bind_local_combo_012', () => {
  it('child action updates parent', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /blc012-incShared/i }));
    expect(screen.getByText(/blc012-shared: 1/i)).toBeInTheDocument();
  });
});
