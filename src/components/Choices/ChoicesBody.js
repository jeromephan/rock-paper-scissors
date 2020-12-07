import './ChoicesBody.scss';
import ChoicesButton from './ChoicesButton';
import choicesMacros from '../../macros/choices';

const ChoicesBody = ({ className }) => (
  <div className={`${className} choices-body`}>
    <ChoicesButton
      className='choices-body__button choices-body__button--left'
      choice={choicesMacros.type.paper}
    />
    <ChoicesButton
      className='choices-body__button choices-body__button--right'
      choice={choicesMacros.type.scissors}
    />
    <ChoicesButton
      className='choices-body__button choices-body__button--bottom'
      choice={choicesMacros.type.rock}
    />
  </div>
);

export default ChoicesBody;
