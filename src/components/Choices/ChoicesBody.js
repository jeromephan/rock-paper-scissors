import './ChoicesBody.scss';
import ChoicesButton from './ChoicesButton';

const ChoicesBody = ({ className }) => (
  <div className={`${className} choices-body`}>
    <ChoicesButton
      className="choices-body__button choices-body__button--left"
      choice="paper"/>
    <ChoicesButton
      className="choices-body__button choices-body__button--right"
      choice="scissors"/>
    <ChoicesButton
      className="choices-body__button choices-body__button--bottom"
      choice="rock"/>
  </div>
);

export default ChoicesBody;
