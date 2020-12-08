import './HeaderScore.scss';
import { useSelector } from 'react-redux';
import { getScore } from '../../../store/modules/score/score.selectors';

const HeaderScore = () => {
  const score = useSelector((state) => getScore(state));

  return (
    <div className='header-score'>
      <p className='header-score__text'>SCORE</p>
      <p className='header-score__figure'>{score}</p>
    </div>
  );
};

export default HeaderScore;
