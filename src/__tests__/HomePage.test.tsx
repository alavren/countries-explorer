import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('HomePage component', () => {
  it('renders the page title correctly', () => {
    render(<HomePage />);
    const titleElement = screen.getByText('Explore Countries');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<HomePage />);
    const imageElement = screen.getByAltText('globe');
    expect(imageElement).toBeInTheDocument();
  });
});
