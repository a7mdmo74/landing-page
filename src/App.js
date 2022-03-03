import { CssBaseline } from "@mui/material";
import "./App.css";
import Feature from "./components/Feature/Feature";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Customer from "./components/Customer/Customer";
import Support from "./components/Support/Support";
import Company from "./components/Company/Company";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Home />
      <Feature />
      <Customer />
      <Support />
      <Company />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
