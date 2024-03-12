/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../contaxt/contaxt';

const ProtectedRoute = ({ children }) => {
  const { user_id } = useAppContext();
  if (!user_id) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute