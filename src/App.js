import Landing from "./components/LandingPage/landingPage";
import Browse from "./components/Browse/browse";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from "./components/Menu/menu";
import Keyboards from "./components/Browse/Categories/keyboards";
import Mouses from "./components/Browse/Categories/mouses";
import Cameras from "./components/Browse/Categories/cameras";
import Headsets from "./components/Browse/Categories/headsets";
import Mics from "./components/Browse/Categories/mics";
import VSD from "./components/VSD/vsd";
import Cart from "./components/Cart/cart";
import { commerce } from './lib/commerce'
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [keyboards, setKeyboards] = useState([]);
  const [mouses, setMouses] = useState([]);
  const [cams, setCams] = useState([]);
  const [headsets, setHeadsets] = useState([]);
  const [mics, setMics] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  useEffect(() => {
    products.forEach(prod => {

      let tempKeyboards = [];
      let tempMouses = [];
      let tempCams = [];
      let tempHeadsets = [];
      let tempMics = [];

      if (prod.categories[0].name === "Keyboards") {
        tempKeyboards.push(prod)
      } else if (prod.categories[0].name === "Mouses") {
        tempMouses.push(prod)
      } else if (prod.categories[0].name === "Microphones" ) {
        tempMics.push(prod)
      } else if (prod.categories[0].name === "Headsets") {
         tempHeadsets.push(prod)
      } else if (prod.categories[0].name === "Cameras") {
        tempCams.push(prod)
      }

      setKeyboards(tempKeyboards);
      setCams(tempCams);
      setHeadsets(tempHeadsets);
      setMics(tempMics);
      setMouses(tempMouses);
    })
  }, [products])

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  //pass order, pass error and pass handlecapturecheckout

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const newCart = await commerce.cart.add(productId, quantity)
    setCart(newCart.cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const newCart = await commerce.cart.update(productId, quantity);
    setCart(newCart.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const newCart = await commerce.cart.remove(productId)
    setCart(newCart.cart)
  }

  const handleEmptyCart = async () => {
    const newCart = await commerce.cart.empty()
    setCart(newCart.cart)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
        <Route exact path="/browse/keyboards" element={<Keyboards prods={keyboards} addToCart={handleAddToCart}/>}/>
        <Route exact path="/browse/mouses" element={<Mouses prods={mouses}/>}/>
        <Route exact path="/browse/cameras" element={<Cameras prods={cams}/>}/>
        <Route exact path="/browse/microphones" element={<Mics prods={mics}/>}/>
        <Route exact path="/browse/headsets" element={<Headsets prods={headsets}/>}/>
        <Route exact path="/vsd" element={<VSD/>}/>
        <Route exact path="/cart" element={<Cart cart={cart}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
