import { Link } from 'react-router-dom';

const CategoryCard = ({ category, onDelete }) => {
  return (
    <div className="category-card">
      <div className="category-image-container">
        <img 
          src={category.image} 
          alt={category.name}
          className="category-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
            e.target.alt = 'Image not available';
          }}
        />
      </div>
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="item-count">{category.itemCount} items</p>
      </div>
      <div className="card-actions">
        <Link to={`/edit/${category.id}`} className="edit-link">
          Edit
        </Link>
        <button 
          onClick={() => onDelete(category.id)} 
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;