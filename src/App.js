import "./App.css";
import "./components/Products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/HeaderSlider.css";
import "./components/Header.css";
import "./components/UnderHeader.css";
import "./components/BeforFooter.css";
import "./components/login.css";
import "./components/HeaderSlider.css";
import "./components/Checkout.css";
import "./components/FooterSignIn.css";
import "./Responsive.css";
import Home from "./components/Home";
import {  Link, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn";
import Checkout from "./components/Checkout";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..
AOS.init();

document.body.style.backgroundColor = "aliceblue";

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          {/* <Route path="*" element={<NotFound/>}></Route> */}
        </Routes>
     
    </div>
  );
}

export default App;
