// Main.jsx

import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const Main = () => { 

  const [prod, setProd] = useState([]); // State for products data
  const [search, setSearch] = useState(""); // State for search input
  const [menu, setMenu] = useState(""); // State for menu selection

  const getProducts = () => { // Function to fetch products data
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProd(json)); // Setting products state with fetched data
  };

  useEffect(() => { // useEffect hook to fetch products data when component mounts
    getProducts();
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} /> {/* Rendering Navbar component with setSearch prop */}
      <Menubar setMenu={setMenu} /> {/* Rendering Menubar component with setMenu prop */}
      <Home products={prod} search={search} menu={menu} /> {/* Rendering Home component with products, search, and menu props */}
      <Footer /> {/* Rendering Footer component */}
    </div>
  );
};

export default Main; // Exporting Main component
