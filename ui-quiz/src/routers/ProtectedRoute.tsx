import { Navigate } from "react-router-dom";
import useAccountActions from "../actions/useAccountActions";

const ProtectedRoute = ({children}: any) => {
  const { isLogIn, fetchUserTokenFromCache } = useAccountActions();

  fetchUserTokenFromCache();

  if (!isLogIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;