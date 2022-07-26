import React from "react";

const Avatar = ({name, role}) => {
  return (
    <div class="flex items-center space-x-3">
      <div class="avatar">
        <div class="w-16 rounded-full">
          <img
            src="https://i.pravatar.cc/300"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div class="font-bold">{name}</div>
        <div class="text-sm opacity-50">{role}</div>
      </div>
    </div>
  );
};

export default Avatar;
