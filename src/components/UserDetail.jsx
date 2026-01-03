import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  );
};

export default UserDetail;
