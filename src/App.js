import { Header } from './components/header/header';
import styled from 'styled-components';
import { HomeOne } from './components/home1/home1';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
function App() {
  return (
    <AppContainer className="App">
      <Header/>
      <HomeOne/>
    </AppContainer>
  );
}

export default App;
