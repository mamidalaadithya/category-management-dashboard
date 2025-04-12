import { useState } from 'react';
import CategoryCard from './CategoryCard';

const Dashboard = ({ categories, onLogout, onAddCategory, onDeleteCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = (newCategory) => {
    onAddCategory(newCategory);
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">fastcart</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={() => setIsModalOpen(true)} className="add-button">
            + Add Category
          </button>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onDelete={onDeleteCategory}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="modal-title">Add New Category</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              handleAddCategory({
                name: form.name.value,
                itemCount: parseInt(form.itemCount.value),
                image: form.image.value
              });
              form.reset();
            }} className="modal-form">
              <input
                type="text"
                name="name"
                placeholder="Category Name"
                required
              />
              <input
                type="number"
                name="itemCount"
                placeholder="Item Count"
                min="0"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
              />
              <button type="submit" className="submit-button">
                Add Category
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
