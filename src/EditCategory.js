import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = ({ categories, onUpdateCategory }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    itemCount: 0,
    image: ''
  });

  useEffect(() => {
    const category = categories.find(cat => cat.id === id);
    if (category) {
      setFormData({
        name: category.name,
        itemCount: category.itemCount,
        image: category.image
      });
    } else {
      navigate('/');
    }
  }, [id, categories, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCategory(id, formData);
    navigate('/');
  };

  return (
    <div className="modal-overlay" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-content" style={{ margin: '2rem auto' }}>
        <button className="close-button" onClick={() => navigate('/')}>
          &times;
        </button>
        <h2 className="modal-title">Edit Category</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Category Name"
            required
          />
          <input
            type="number"
            name="itemCount"
            value={formData.itemCount}
            onChange={handleChange}
            placeholder="Item Count"
            min="0"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <button type="submit" className="submit-button">
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;