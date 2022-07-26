import React from "react";
import { Link } from "react-router-dom";

const Pending = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">All of your Pending Tasks</h2>
      <Link className="p-5 underline" to="/dashboard/taskpage">
        Task ONE
      </Link>
    </div>
  );
};

export default Pending;
