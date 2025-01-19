import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ session }) {
  return session ? <Outlet /> : <Navigate to="/" />;
}
