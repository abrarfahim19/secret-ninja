import React from "react";
import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const { groupID } = useParams();
  return (
    <div>
      <h2 className="text-3xl">This is group{groupID}</h2>
    </div>
  );
};

export default GroupDetails;
