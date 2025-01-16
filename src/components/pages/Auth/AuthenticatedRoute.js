import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedRoute({ session }) {
    return session ?  <Navigate to="/" /> : <Outlet /> ;
}
