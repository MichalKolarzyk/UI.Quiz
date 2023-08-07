import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";


const ProtectedRoute = ({children}: any) => {
  const token = useToken();
  if (!token.isActive()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;