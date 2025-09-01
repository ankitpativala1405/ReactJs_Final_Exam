import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 mb-4">Welcome to Product Manager</h1>
          <p className="lead mb-4">
            A comprehensive product management application built with React, Redux, and Bootstrap.
          </p>
          
          {isAuthenticated ? (
            <div>
              <p className="mb-4">Welcome back, {user?.name || user?.username}!</p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/products" className="btn btn-primary btn-lg">
                  View Products
                </Link>
                <Link to="/add-product" className="btn btn-success btn-lg">
                  Add Product
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-4">Please login to access the product management features.</p>
              <Link to="/login" className="btn btn-primary btn-lg">
                Login
              </Link>
            </div>
          )}
          
          <div className="mt-5">
            <h3>Features</h3>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Product Management</h5>
                    <p className="card-text">
                      Add, edit, and delete products with full CRUD operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Search & Filter</h5>
                    <p className="card-text">
                      Search products by name and filter by category.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Sorting</h5>
                    <p className="card-text">
                      Sort products by name or price (low to high, high to low).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
