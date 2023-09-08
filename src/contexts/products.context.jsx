import { createContext, useEffect, useState } from "react";

import {  getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Storage Box
export const ProductsContext = createContext({
  products : {},
});



function ProductProvider({ children }) {

  const [products, setProducts] = useState({})


  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap)
    }

    getCategories()
    
  }, [])
  const value = {products}
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export default ProductProvider;
