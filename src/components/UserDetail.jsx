import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  return <div>{user.name}</div>;
};

export default UserDetail;
