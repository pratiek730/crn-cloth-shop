
import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss'


function CategoryItem( { category }) {
    const {imageUrl , title } = category
    const navigate = useNavigate()
    function handleClick() {
        navigate('shop/' + title)
    }
    return ( 
        <div className="category-container" onClick={handleClick}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl}})`}} />
            <div  className="category-body-container">
            <h2>  {title.toUpperCase()}</h2>
            <p>Shop Now</p>
            </div>
        </div>
     );
}

export default CategoryItem;