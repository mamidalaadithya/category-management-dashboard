import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import EditCategory from './EditCategory';
import NotFound from './NotFound';
import './App.css';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const sampleCategories = [
    { id: '1', name: "Men Clothes", itemCount: 24, image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '2', name: "Women Clothes", itemCount: 12, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '3', name: "Accessories", itemCount: 43, image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '4', name: "Cotton Clothes", itemCount: 31, image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '5', name: "Summer Clothes", itemCount: 26, image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '6', name: "Wedding Clothes", itemCount: 52, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '7', name: "Spring Collection", itemCount: 24, image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '8', name: "Casual Clothes", itemCount: 52, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    { id: '9', name: "Hats", itemCount: 26, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" }
  ];

  useEffect(() => {
    if (categories.length === 0) {
      const savedCategories = localStorage.getItem('categories');
      if (savedCategories) {
        try {
          setCategories(JSON.parse(savedCategories));
        } catch (err) {
          setError('Error loading categories');
          setCategories(sampleCategories);
          localStorage.setItem('categories', JSON.stringify(sampleCategories));
        }
      } else {
        setCategories(sampleCategories);
        localStorage.setItem('categories', JSON.stringify(sampleCategories));
      }
    }
  }, [categories.length, sampleCategories]); // Added missing dependencies

  const handleLogin = (username, password) => {
    if (username === "Adithya" && password === "12345678") {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const addCategory = (newCategory) => {
    const updatedCategories = [...categories, { 
      ...newCategory, 
      id: Date.now().toString(),
      image: newCategory.image || 'https://via.placeholder.com/300'
    }];
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const updateCategory = (id, updatedData) => {
    const updatedCategories = categories.map(cat => 
      cat.id === id ? { 
        ...cat, 
        ...updatedData,
        image: updatedData.image || cat.image
      } : cat
    );
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} error={error} />} />
        <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard categories={categories} onLogout={handleLogout} onAddCategory={addCategory} onDeleteCategory={deleteCategory} /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditCategory categories={categories} onUpdateCategory={updateCategory} /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
