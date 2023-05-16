import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {

  return (

    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/edit-product/:id" element={<EditProduct/>} />
        </Routes>
      </Router>

    </div>

  );

}

export default App;
