import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const access_token = useSelector(authSelectors.selectToken);
  console.log(access_token);
  return <>{access_token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PublicRoute;
