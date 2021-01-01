import { Modal } from '@material-ui/core';
import { useState } from 'react';
import './Rules.scss';
import { makeStyles } from '@material-ui/core/styles';
import close from '../../assets/icon-close.svg';
import rules from '../../assets/image-rules.svg';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    borderRadius: '8px',
  },
}));

const Rules = () => {
  const classes = useStyles();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  // getModalStyle is not a pure function, we roll the style only on the first render

  return (
    <div className='rules'>
      <button
        data-testid='button'
        onClick={() => setIsModalOpen(true)}
        className='rules__button'
      >
        RULES
      </button>
      <Modal
        data-testid='modal'
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div style={modalStyle} className={`${classes.paper} rules__modal`}>
          <p className='rules__modal-title'>RULES</p>
          <img className='rules__modal-button' alt='close' src={close} />
          <img className='rules__modal-image' alt='rules' src={rules} />
        </div>
      </Modal>
    </div>
  );
};

export default Rules;
