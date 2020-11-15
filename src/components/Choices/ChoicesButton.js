import './ChoicesButton.scss';
import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';

const iconsMap = {
  paper,
  rock,
  scissors,
};

const ChoicesButton = ({ choice, className = '' }) => (
  <button className={`choices-button choices-button--${choice} ${className}`.trim()}>
    <img
      className="choices-button__icon"
      alt={choice}
      src={iconsMap[choice]}/>
  </button>
);

export default ChoicesButton;
