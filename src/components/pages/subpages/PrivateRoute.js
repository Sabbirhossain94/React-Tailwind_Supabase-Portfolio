import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ session, isAuth }) {
  return <>{session?.access_token ? <Outlet /> : <Navigate to="/" />}</>;
}
