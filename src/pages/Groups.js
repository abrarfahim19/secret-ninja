import React from "react";
import { Outlet } from "react-router-dom";
import GroupNav from "./GroupNav";

const Groups = () => {
  return (
    <div>
      <GroupNav></GroupNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Groups;
