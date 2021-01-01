import { render, screen } from '@testing-library/react';
import HeaderScore from './HeaderScore';
import { Provider } from 'react-redux';
import store from '../../../store';
import { INCREASE_SCORE, DECREASE_SCORE } from '../../../store/modules/score/score.reducers';

describe('HeaderScore', () => {
  test('should render the score depending of the store state', () => {
    render(
      <Provider store={store}>
        <HeaderScore />
      </Provider>
    );
    const score = screen.getByTestId('score');

    expect(score.textContent).toBe('0');

    store.dispatch(INCREASE_SCORE());

    expect(score.textContent).toBe('1');

    store.dispatch(DECREASE_SCORE());

    expect(score.textContent).toBe('0');
  });
});
