import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChoicesButton from '../Choices/ChoicesButton';
import './ResultBody.scss';
import {
  getPlayerChoice,
  getComputerChoice,
} from '../../store/modules/choices/choices.selectors';
import { getWinner } from '../../managers/rules/useCases/getWinner';
import { win, lose, draw } from '../../macros/result';
import { SET_CHOICES } from '../../store/modules/choices/choices.reducers';
import {
  DECREASE_SCORE,
  INCREASE_SCORE,
} from '../../store/modules/score/score.reducers';

const resultMap = {
  [win]: 'You win',
  [lose]: 'You lose',
  [draw]: 'Draw',
};

const ResultBody = ({ className }) => {
  const dispatch = useDispatch();
  const playerChoice = useSelector((state) => getPlayerChoice(state));
  const computerChoice = useSelector((state) => getComputerChoice(state));
  const [result, setResult] = useState('');
  const setScore = (result) => {
    if (result === win) {
      dispatch(INCREASE_SCORE());
    } else if (result === lose) {
      dispatch(DECREASE_SCORE());
    }
  };

  const goToChoicesPage = () => dispatch(SET_CHOICES({ choice: null }));

  useEffect(() => {
    setResult(getWinner(playerChoice, computerChoice));
  }, [playerChoice]);

  useEffect(() => {
    setScore(result);
  }, [result]);

  return (
    <div className={`${className} result-body`}>
      <div className='result-body__wrapper'>
        <p className='result-body__title'>You picked</p>
        <ChoicesButton
          disabled
          className='result-body__choice result-body__choice--left'
          choice={playerChoice}
        />
      </div>
      <div className='result-body__wrapper'>
        <p className='result-body__text'>{resultMap[result]}</p>
        <button onClick={goToChoicesPage} className='result-body__button'>
          Play again
        </button>
      </div>
      <div className='result-body__wrapper'>
        <p className='result-body__title'>The house picked</p>
        <ChoicesButton
          disabled
          className='result-body__choice result-body__choice--left'
          choice={computerChoice}
        />
      </div>
    </div>
  );
};

export default ResultBody;
