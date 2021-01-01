import './App.scss';
import Header from './components/Header/Header';
import ChoicesBody from './components/Choices/ChoicesBody';
import ResultBody from './components/Result/ResultBody';
import { Container, Grid } from '@material-ui/core';
import Rules from './components/Rules/Rules';
import { useSelector } from 'react-redux';
import { getPlayerChoice } from './store/modules/choices/choices.selectors';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const App = () => {
  const playerChoice = useSelector((state) => getPlayerChoice(state));

  const body = playerChoice ? (
    <ResultBody data-testid='app-result' className='app__result' />
  ) : (
    <ChoicesBody data-testid='app-choices' className='app__choices' />
  );

  return (
    <Container className='app'>
      <Grid container alignItems='center' direction='column'>
        <Header />
        <SwitchTransition>
          <CSSTransition
            key={playerChoice ? 'result' : 'choices'}
            className={playerChoice ? 'app__result fade' : 'app__choices fade'}
            timeout={300}
          >
            {body}
          </CSSTransition>
        </SwitchTransition>
        <Rules />
      </Grid>
    </Container>
  );
};

export default App;
