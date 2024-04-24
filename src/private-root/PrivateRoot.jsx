import React from 'react';
import { Navigate } from "react-router-dom";
import Layout from '../components/layout';
import { useSelector } from "react-redux";


function PrivateWrapper() {
    const isAuthenticateds = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuthenticateds);
 
    const isAuthenticated = true

  return (
    <>
      {
        isAuthenticated ? <Layout /> : <Navigate to="/login" />
      }
    </>
  )
}

export default PrivateWrapper
