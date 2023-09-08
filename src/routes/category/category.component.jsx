import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

function Category() {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [titleProducts, setTitleProducts] = useState([]);

  useEffect(() => {
    setTitleProducts(products[category]);
  }, [category, products]);

  
  return (
    <>
        <h2 className="category-title">{category.toUpperCase()}</h2>
    <div className="category-page-container">
        {
            titleProducts && titleProducts.map((product) => <ProductCard key={product.id} product={product}/>)
        }
    </div>
    </>
  );
  
}

export default Category;
