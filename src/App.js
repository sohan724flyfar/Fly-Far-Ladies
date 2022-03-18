import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Home from './Componants/Home/Home';
import PackageDetails from './Componants/PackageDetails/PackageDetails';
import PackageMain from './Componants/PackageMain/PackageMain';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FE94A2",
      200: "#FE94A2",
      300: "#FE94A2",
      400: "#FE94A2",
      500: "#FE94A2",
      600: "#FE94A2",
      700: "#FE94A2",
      800: "#FE94A2",
      900: "#FE94A2",
    },
  },
});
function App() {

  return (
    <ChakraProvider theme={theme}>

      {/* <Home /> */}
      {/* <PackageMain /> */}
      <PackageDetails />


    </ChakraProvider>
  );
}

export default App;
