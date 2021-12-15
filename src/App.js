import Header from "./components/head";
import Home from "./components/home.body";
import Project from "./components/project.body";
import { Container } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Container className="App" width={["100%", "100%", "100%", "100%"]}  bgColor="#fdfff5" marginTop="-1rem" height="150rem" maxWidth="1440">
    <Header/>
    <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/projects" element= {<Project/>}/>
    </Routes>
    
      </Container>
    </BrowserRouter>
      
    
  );
}

export default App;
