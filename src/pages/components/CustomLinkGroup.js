import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinkGroup = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        // style={{ textDecoration: match ? "underline" : "none" }}
        // "text-emerald-600"
        className={`${
          match
            ? "font-bold after:content-[''] after:block after:w-full after:h-1 after:bg-primary"
            : "after:content-[''] after:block after:w-0 after:h-1 after:bg-primary after:ease-in after:duration-300 hover:after:w-full"
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLinkGroup;
