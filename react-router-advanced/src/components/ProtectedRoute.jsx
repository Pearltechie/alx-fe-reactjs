import { Navigate } from 'react-router-dom';
import {useAuth} from '../auth';

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
