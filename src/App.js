import Home from "./routes/home/home.component";
import {Route,Routes} from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import ShopPage from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";






function App() {
  return ( 

    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Route>

    </Routes>
   );
}


export default App;
