import React, { useState } from "react";
import MainPage from "./components/MainPage";
import ProductCreate from "./components/ProductCreate"; 

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

 
  let pageContent;
  switch (currentPage) {
    case "create":
      pageContent = (
        <ProductCreate onAddProduct={addProduct} onNavigate={setCurrentPage} />
      );
      break;
  
    default:
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  return (<div>{pageContent}</div>);
} 

export default App;