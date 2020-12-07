import './App.scss';
import Header from './components/Header/Header';
import ChoicesBody from './components/Choices/ChoicesBody';
import { Container, Grid } from '@material-ui/core';
import Rules from './components/Rules/Rules';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Container className='app'>
        <Grid container alignItems='center' direction='column'>
          <Header />
          <ChoicesBody className='app__choices' />
          <Rules />
        </Grid>
      </Container>
    </Provider>
  );
};

export default App;
