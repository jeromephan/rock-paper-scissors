import './App.scss';
import Header from './components/Header/Header';
import ChoicesBody from './components/Choices/ChoicesBody';
import ResultBody from './components/Result/ResultBody';
import { Container, Grid } from '@material-ui/core';
import Rules from './components/Rules/Rules';
import { useSelector } from 'react-redux';
import { getPlayerChoice } from './store/modules/choices/choices.selectors';

const App = () => {
  const playerChoice = useSelector((state) => getPlayerChoice(state));

  const body = playerChoice ? (
    <ResultBody className='app__result' />
  ) : (
    <ChoicesBody className='app__choices' />
  );

  return (
    <Container className='app'>
      <Grid container alignItems='center' direction='column'>
        <Header />
        {body}
        <Rules />
      </Grid>
    </Container>
  );
};

export default App;
