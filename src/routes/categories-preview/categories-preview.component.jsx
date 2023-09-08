import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {
    const {products} = useContext(ProductsContext)
    return ( 

        <>
        

        {
            Object.keys(products).map(title => {
                const titleProducts = products[title]

                return <CategoryPreview key={title} title={title} products={titleProducts} />
            })
        }



       
        

        
         </>
     );
}

export default CategoriesPreview;