import { Header } from './components/header/header';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
function App() {
  return (
    <AppContainer className="App">
      <Header></Header>
    </AppContainer>
  );
}

export default App;
