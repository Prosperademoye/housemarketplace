import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import {spinner} from './Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <spinner/>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
};
export default PrivateRoute;