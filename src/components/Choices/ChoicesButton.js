import './ChoicesButton.scss';
import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';
import { useDispatch } from 'react-redux';
import { SET_CHOICES } from '../../store/modules/choices/choices.reducers';
import PropTypes from 'prop-types';
import choicesMacros from '../../macros/choices';

const iconsMap = {
  paper,
  rock,
  scissors,
};

const ChoicesButton = ({
  choice,
  className = '',
  disabled,
  'data-testid': dataTestId,
}) => {
  const dispatch = useDispatch();

  const setChoices = (choice) =>
    dispatch(
      SET_CHOICES({
        choice,
      })
    );

  return (
    <button
      data-testid={dataTestId}
      disabled={disabled}
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

ChoicesButton.propTypes = {
  'data-testid': PropTypes.string,
  choice: PropTypes.oneOf([
    choicesMacros.type.paper,
    choicesMacros.type.rock,
    choicesMacros.type.scissors,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ChoicesButton.defaultProps = {
  'data-testid': undefined,
  className: '',
  choice: '',
  disabled: false,
};

export default ChoicesButton;
