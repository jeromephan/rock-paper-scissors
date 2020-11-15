import './App.scss';
import Header from './components/Header/Header';
import ChoicesBody from './components/Choices/ChoicesBody';
import { Container, Grid } from '@material-ui/core';
import Rules from './components/Rules/Rules';

const App = () => {
  return (
    <Container className="app">
      <Grid
        container
        alignItems="center"
        direction="column">
        <Header/>
        <ChoicesBody className="app__choices"/>
        <Rules/>
      </Grid>
    </Container>
  );
};

export default App;
