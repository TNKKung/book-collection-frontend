import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtecteRoute(props) {
  const { user } = useSelector((state) => state.userApi);
  return <>{user ? <Route {...props} /> : <Redirect to="/login" />}</>;
}
