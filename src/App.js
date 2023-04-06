import { Header } from './components/header/header';
import styled from 'styled-components';
import { Main } from './components/Main/home1';

const AppContainer = styled.div`
  width: 100%;
`
function App() {
  return (
    <AppContainer className="App">
      <Header/>
      <Main/>
    </AppContainer>
  );
}

export default App;
