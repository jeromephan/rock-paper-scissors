import { render, screen, fireEvent } from '@testing-library/react';
import Rules from './Rules';

describe('Rules', () => {
  test('render a modal when clicking on the rules button', () => {
    const { getByTestId } = render(<Rules />);

    expect(screen.queryByTestId('modal')).toBeNull();

    const button = getByTestId('button');

    fireEvent.click(button);

    expect(screen.queryByTestId('modal')).not.toBeNull();
  });
});
