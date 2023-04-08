import { Header } from './components/header/header';
import styled from 'styled-components';
import { Home1 } from './components/home1/home1';
import { Home2 } from './components/home2/home2';
import { Home3 } from './components/home3/home3';
import { Clients } from './components/home4 - clients/home4';
import { Footer } from './components/footer/footer';

const AppContainer = styled.div`
  width: 100%;

  h2{
    font-size: 32px;
    font-weight: 900;
    margin: 20px 0;
  }
  p {
      font-family: "Barlow", sans-serif;
      line-height: 1.5rem;
      margin-bottom: 10px;
      padding: 0 10px;
    }
`
function App() {
  return (
    <AppContainer className="App">
      <Header/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Clients/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
