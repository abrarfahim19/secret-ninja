import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinkGroup = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div class="avatar">
      <div
        className={`${
          match
            ? "w-16 rounded-full ring ring-primary ring-offset-base-100"
            : "w-16 rounded-full"
        }`}
      >
        <Link to={to}>{children}</Link>
      </div>
    </div>
  );
};

export default CustomLinkGroup;
