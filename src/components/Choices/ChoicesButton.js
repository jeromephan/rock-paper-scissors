import './ChoicesButton.scss';
import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';
import { useDispatch } from 'react-redux';
import { SET_CHOICES } from '../../store/modules/choices/choices.reducers';

const iconsMap = {
  paper,
  rock,
  scissors,
};

const ChoicesButton = ({ choice, className = '' }) => {
  const dispatch = useDispatch();

  const setChoices = (choice) =>
    dispatch(
      SET_CHOICES({
        choice,
      })
    );

  return (
    <button
      onClick={() => setChoices(choice)}
      className={`choices-button choices-button--${choice} ${className}`.trim()}
    >
      <img
        className='choices-button__icon'
        alt={choice}
        src={iconsMap[choice]}
      />
    </button>
  );
};

export default ChoicesButton;
