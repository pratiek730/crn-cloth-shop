import ProductCard from "../product-card/product-card.component";
import "./category-all.styles.scss";

function CategoryAll({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryAll;
