import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ session }) {
    useEffect(()=> {
       console.log(session)
    },[])
  return session ? <Outlet /> : <Navigate to="/" />;
}
