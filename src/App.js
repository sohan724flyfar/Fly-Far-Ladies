import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Blog from './Componants/Blog/Blog';
import BookingDetails from './Componants/BookingDetails/BookingDetails';
import BookingInput from './Componants/BookingInput/BookingInput';
import Home from './Componants/Home/Home';
import PackageDetails from './Componants/PackageDetails/PackageDetails';
import PackageMain from './Componants/PackageMain/PackageMain';
import SingleStockImage from './Componants/SingleStockImage/SingleStockImage';
import StockImageDetail from './Componants/StockImage/StockImageDetail';

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
            <PackageMain />
          </Route>

          <Route path="/stockphotos" >
            <StockImageDetail />
          </Route>


          <Route path="/singleStockImage" >
            <SingleStockImage />
          </Route>

          <Route path="/blog" >
            <Blog />
          </Route>

          <Route path="/bookingInput" >
            <BookingInput />
          </Route>


          <Route path="/packageDetails" >
            <PackageDetails />
          </Route>

          <Route path="/BookingDetails" >
            <BookingDetails />
          </Route>


        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

