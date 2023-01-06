import Landing from "./components/LandingPage/landingPage";
import Browse from "./components/Browse/browse";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from "./components/Menu/menu";
import Keyboards from "./components/Browse/Categories/keyboards";
import VSD from "./components/VSD/vsd";
import Cart from "./components/Cart/cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
        <Route exact path="/browse/keyboards" element={<Keyboards/>}/>
        <Route exact path="/vsd" element={<VSD/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App;
