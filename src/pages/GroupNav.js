import React from "react";
import group from "../FakeDB/Groups.json";
import CustomLinkGroup from "./components/CustomLinkGroup";

const GroupNav = () => {
  return (
    <>
      <div>
        <div className="m-4 Groups flex gap-3">
          {group.map((g) => {
            return (
              <CustomLinkGroup to={`/groups/${g.id}`}>
                <img src={g.group_image} alt="" />
              </CustomLinkGroup>
            );
          })}
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span class="text-3xl font-bold">+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupNav;
