import Landing from "./components/LandingPage/landingPage";
import Browse from "./components/Browse/browse";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from "./components/Menu/menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
      </Routes>
    </Router>
  )
}

export default App;
