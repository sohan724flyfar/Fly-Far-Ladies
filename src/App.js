import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Home from './Componants/Home/Home';
import Navbar from './Componants/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home/>


    </ChakraProvider>
  );
}

export default App;
