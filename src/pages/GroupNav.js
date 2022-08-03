import React from "react";
import { Outlet } from "react-router-dom";
import CustomLinkForNav from "./components/CustomLinkForNav";

const GroupNav = () => {
  return (
    <>
      <div>
        <CustomLinkForNav to="/groups/abc1">Group1</CustomLinkForNav>
        <CustomLinkForNav to="/groups/abc2">Group2</CustomLinkForNav>
        <CustomLinkForNav to="/groups/abc3">Group3</CustomLinkForNav>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default GroupNav;
