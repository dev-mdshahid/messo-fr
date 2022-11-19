import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../helpers/Contexts';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const {authenticated} = useContext(LoginContext);
  
  useEffect(() => {
    if (authenticated !== true) {
      navigate('/login');
    }
  }, [authenticated]);

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
