import { render, screen, fireEvent, act } from '@testing-library/react';
import ResultBody from './ResultBody';
import { Provider } from 'react-redux';
import store from '../../store';
import result from '../../macros/result';

describe('ResultBody', () => {
  test('should render cpu and computer choices after 1500ms', () => {
    jest.useFakeTimers();

    render(
      <Provider store={store}>
        <ResultBody />
      </Provider>
    );

    expect(screen.queryByTestId('choice-player')).not.toBeNull();
    expect(screen.queryByTestId('choice-cpu')).not.toHaveClass(
      'result-body__choice--shown'
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(screen.queryByTestId('choice-cpu')).toHaveClass(
      'result-body__choice--shown'
    );
  });

  test('should remove the player and computer choices when clicking on "Play Again" button', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(
      <Provider store={store}>
        <ResultBody />
      </Provider>
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const button = getByTestId('button-play-again');

    act(() => {
      fireEvent.click(button);
    });

    const state = store.getState();

    expect(state.choices.player).toBeNull();
    expect(state.choices.computer).toBeNull();
  });
});
