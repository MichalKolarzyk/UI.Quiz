import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogIn } from "../reducers/accountReducers/selectors";


const ProtectedRoute = ({children}: any) => {
  const isLogIn = useSelector(selectIsLogIn);
  console.log(isLogIn);

  if (!isLogIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;