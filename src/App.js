import Header from "./components/head";
import Home from "./components/home.body";
import {
  Container
} from '@chakra-ui/react'


function App() {
  return (
  
      <Container className="App" width={["100%", "100%", "100%", "100%"]} height="200rem" bgColor="#fdfff5" marginTop="-1rem" maxWidth="1440">
        <Header/>
        <Home/>
      </Container>
    
  );
}

export default App;
