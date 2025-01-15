import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedRoute({ isAuth }) {
    return isAuth ?  <Navigate to="/" /> : <Outlet /> ;
}
