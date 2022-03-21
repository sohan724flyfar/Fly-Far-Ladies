import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import BookingDetails from './Componants/BookingDetails/BookingDetails';
import BookingInput from './Componants/BookingInput/BookingInput';
import Home from './Componants/Home/Home';
import MultipleSlider from './Componants/PackageDetails/MultipleSlider';
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/home" >
            <Home />
          </Route>


          <Route path="/package" >
            {/* <BookingDetails /> */}
            {/* <PackageMain /> */}
            <BookingInput />
          </Route>

          <Route path="/packageDetails" >
            <PackageDetails />
          </Route>



        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

{/* <Home /> */ }
{/* <PackageMain /> */ }
{/* <PackageDetails /> */ }