import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct } from '../store/actions/productActions';

const ProductItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
    description: product.description
  });
  
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editData.title && editData.price && editData.image && editData.category) {
      dispatch(updateProduct(product.id, editData));
      setIsEditing(false);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleCancel = () => {
    setEditData({
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isEditing) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img 
                src={editData.image} 
                alt={editData.title}
                className="img-fluid rounded"
                style={{ height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={editData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={editData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  className="form-control"
                  name="image"
                  value={editData.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={editData.category}
                  onChange={handleInputChange}
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home</option>
                  <option value="Sports">Sports</option>
                  <option value="Books">Books</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={editData.description}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={product.image} 
            alt={product.title}
            className="img-fluid rounded-start"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="card-text">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="card-text">
              <small className="text-muted">{product.description}</small>
            </p>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-primary btn-sm"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
