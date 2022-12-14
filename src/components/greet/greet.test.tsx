import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  describe('With Props', () => {
    test('renders with the name', () => {
      render(<Greet name="john" />);
      const textElement = screen.getByText('Hello john');
      expect(textElement).toBeInTheDocument();
    });
  });
});
