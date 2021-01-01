import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { SET_CHOICES } from './store/modules/choices/choices.reducers';
import choicesMacros from './macros/choices';
import { config } from 'react-transition-group';

describe('App', () => {
  test('render a list of choices when the player has not selected any choices', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.queryByTestId('app-choices')).not.toBeNull();
    expect(screen.queryByTestId('app-result')).toBeNull();
  });

  test('render the result component when the player has made a choice', () => {
    config.disabled = true;

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    act(() => {
      store.dispatch(SET_CHOICES({ choice: choicesMacros.type.paper }));
    });

    expect(screen.queryByTestId('app-choices')).toBeNull();
    expect(screen.queryByTestId('app-result')).not.toBeNull();
  });
});
