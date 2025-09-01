import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuth } from "../store/actions/authActions";
import Navbar from "../Components/Navbar";
import PrivateRoute from "../Components/PrivateRoute";
import IndexPage from "../pages/IndexPage";
import Login from "../Components/Login";
import ProductList from "../Components/ProductList";
import ProductForm from "../Components/ProductForm";

const AllRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/products" 
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/add-product" 
          element={
            <PrivateRoute>
              <ProductForm />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
};

export default AllRouter;
