import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Succcess';
import Cart from './Pages/Cart';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster />
  </Router>
);

export default App;