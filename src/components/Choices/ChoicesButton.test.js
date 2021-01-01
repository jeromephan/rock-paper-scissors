import { fireEvent, render, screen, act } from '@testing-library/react';
import ChoicesButton from './ChoicesButton';
import { Provider } from 'react-redux';
import store from '../../store';
import choiceMacros from '../../macros/choices';

describe('ChoicesButton', () => {
  test('should set a choice when clicking on the component', () => {
    render(
      <Provider store={store}>
        <ChoicesButton
          choice={choiceMacros.type.rock}
          data-testid='button-choice'
        />
      </Provider>
    );

    let state = store.getState();

    const button = screen.getByTestId('button-choice');

    expect(state.choices.player).toBeNull();
    expect(state.choices.computer).toBeNull();

    act(() => {
      fireEvent.click(button);
    });

    state = store.getState();

    expect(state.choices.player).toBe(choiceMacros.type.rock);
    expect(state.choices.computer).not.toBeNull();
  });
});
