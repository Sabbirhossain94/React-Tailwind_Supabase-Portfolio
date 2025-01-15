import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ session, isAuth }) {
  return session ? <Outlet /> : <Navigate to="/" />;
}
